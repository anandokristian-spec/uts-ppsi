# Product Requirements Document (PRD)

## Sistem Peringatan Dini Banjir Berbasis Prediksi Genangan

### Kabupaten Pesawaran

**\[LOGO PEMDA KABUPATEN PESAWARAN\]   \[LOGO UNIVERSITAS TEKNOKRAT INDONESIA\]**

*(Tempatkan berkas logo resmi pada kop dokumen ini. Lihat bagian 9 untuk aturan penggunaan logo di aplikasi.)*

| Atribut | Keterangan |
| --- | --- |
| Nama produk (working name) | FloodWatch Pesawaran |
| Versi dokumen | 1.0 (Draf awal) |
| Tanggal | 10 November 2026 |
| Penyusun | Kristian Anando |
| Pembimbing | Dr. Erliyan Redy Susanto, M.Kom |
| Institusi | Universitas Teknokrat Indonesia |
| Mitra/pengguna target | Pemerintah Kabupaten Pesawaran (BPBD, Dinas PU, Dinas Kominfo) |
| Status | Draf untuk ditinjau |

---

## 1. Ringkasan Eksekutif

FloodWatch Pesawaran adalah sistem peringatan dini banjir yang menggabungkan data curah hujan, tinggi muka air sungai, dan kondisi drainase untuk memprediksi genangan secara spesifik per lokasi. Sistem memberi peringatan bertingkat (Aman, Waspada, Siaga, Awas) kepada petugas dan warga melalui dashboard web dan notifikasi (Telegram/WhatsApp/SMS), serta menerima laporan banjir dari warga sebagai validasi data.

Backend dibangun dengan **Rust** untuk kinerja dan keandalan, dan data disimpan di **PostgreSQL** (dengan ekstensi PostGIS dan TimescaleDB) untuk data spasial dan deret waktu.

## 2. Latar Belakang dan Masalah

- Banjir sering datang tanpa peringatan yang cukup, sehingga warga tidak sempat bersiap atau mengungsi.
- Data curah hujan, tinggi muka air, dan drainase tersebar di beberapa instansi (BMKG, BPBD, Dinas PU, BBWS) dan tidak terintegrasi.
- Peringatan yang ada umumnya berskala wilayah luas, bukan per desa/kelurahan atau titik rawan.
- Belum ada mekanisme sistematis yang memanfaatkan laporan warga untuk memperbaiki akurasi peringatan.

## 3. Tujuan dan Indikator Keberhasilan

| Tujuan | Indikator (target awal, perlu divalidasi saat uji lapangan) |
| --- | --- |
| Peringatan dini spesifik lokasi | Peringatan terkirim minimal 30 menit sebelum perkiraan genangan pada titik uji |
| Prediksi akurat | MAE prediksi tinggi muka air 1-3 jam di bawah ambang yang disepakati dengan BPBD/Dinas PU; recall status Siaga/Awas minimal 85% |
| Notifikasi cepat | Latensi dari deteksi ambang ke notifikasi terkirim kurang dari 60 detik |
| Keandalan | Uptime layanan inti minimal 99% selama masa uji; ketersediaan data sensor minimal 90% |
| Penerimaan pengguna | Skor SUS minimal 68 dari petugas dan warga uji |

*Catatan: seluruh target bersifat asumsi awal dan perlu disepakati dengan pemangku kepentingan.*

## 4. Ruang Lingkup

**Dalam lingkup (in scope):**

- Ingest data curah hujan (API BMKG/satelit/rain gauge) dan sensor tinggi muka air.
- Penyimpanan data historis, status per titik pantau, dan riwayat peringatan.
- Klasifikasi status bertingkat dan mesin prediksi.
- Dashboard web berbasis peta, notifikasi, dan laporan warga.
- Manajemen pengguna, peran, dan audit log.

**Di luar lingkup (out of scope) tahap awal:**

- Pengendalian otomatis pintu air atau pompa.
- Simulasi hidrodinamika 2D penuh.
- Aplikasi mobile native (tahap awal memakai web responsif/PWA).
- Integrasi sistem peringatan nasional (InaRISK/BNPB) selain sebagai referensi data.

## 5. Pemangku Kepentingan dan Persona

| Peran | Kebutuhan utama |
| --- | --- |
| Admin sistem (Dinas Kominfo/pengembang) | Kelola pengguna, perangkat, konfigurasi ambang, pemantauan kesehatan sistem |
| Operator BPBD | Pantau kondisi real-time, terima peringatan, verifikasi laporan, kirim imbauan |
| Petugas Dinas PU | Pantau drainase dan sungai, catat pemeliharaan saluran |
| Pimpinan daerah | Ringkasan situasi dan laporan periodik |
| Warga | Terima peringatan lokasi sekitar, lapor banjir, lihat jalur evakuasi |
| Peneliti/pengembang | Akses data historis dan hasil evaluasi model |

## 6. User Stories Utama

1. Sebagai operator BPBD, saya ingin melihat peta status semua titik pantau secara real-time agar dapat memutuskan tindakan cepat.
2. Sebagai operator BPBD, saya ingin menerima notifikasi otomatis ketika status berubah menjadi Siaga atau Awas.
3. Sebagai warga, saya ingin berlangganan peringatan untuk desa saya melalui Telegram agar tahu kapan harus bersiap.
4. Sebagai warga, saya ingin melaporkan genangan dengan foto dan lokasi agar petugas mengetahui kondisi lapangan.
5. Sebagai petugas Dinas PU, saya ingin mencatat kondisi dan pemeliharaan saluran agar menjadi fitur prediksi dan bahan perencanaan.
6. Sebagai admin, saya ingin mengatur ambang batas per titik pantau tanpa mengubah kode.
7. Sebagai peneliti, saya ingin mengekspor data historis dan metrik model untuk evaluasi.

## 7. Kebutuhan Fungsional

Prioritas: **P0** wajib (MVP), **P1** penting, **P2** tambahan.

| ID | Kebutuhan | Prioritas |
| --- | --- | --- |
| FR-01 | Sistem mengambil data curah hujan dari sumber eksternal (API BMKG/satelit) secara terjadwal | P0 |
| FR-02 | Sistem menerima data sensor tinggi muka air dan curah hujan dari perangkat IoT melalui MQTT atau HTTPS | P0 |
| FR-03 | Sistem memvalidasi data masuk (rentang nilai, duplikasi, timestamp, perangkat terdaftar) dan menandai anomali | P0 |
| FR-04 | Sistem menyimpan data deret waktu dan data spasial titik pantau | P0 |
| FR-05 | Sistem mengklasifikasi status Aman/Waspada/Siaga/Awas per titik berdasarkan ambang yang dapat dikonfigurasi | P0 |
| FR-06 | Dashboard menampilkan peta titik pantau, status, grafik tren, dan riwayat peringatan | P0 |
| FR-07 | Sistem mengirim notifikasi otomatis via Telegram saat status berubah, dengan pencegahan duplikasi | P0 |
| FR-08 | Autentikasi dan otorisasi berbasis peran (admin, operator, petugas, warga) | P0 |
| FR-09 | Warga dapat mengirim laporan banjir (lokasi, foto, perkiraan tinggi genangan) | P1 |
| FR-10 | Operator dapat memverifikasi atau menolak laporan warga | P1 |
| FR-11 | Prediksi tinggi muka air 1, 3, dan 6 jam ke depan per titik | P1 |
| FR-12 | Prediksi kemungkinan genangan dan estimasi waktu tiba (lead time) | P1 |
| FR-13 | Notifikasi tambahan via WhatsApp atau SMS gateway | P1 |
| FR-14 | Manajemen perangkat sensor: registrasi, status online/offline, kalibrasi, alert perangkat mati | P1 |
| FR-15 | Pencatatan kondisi drainase (kapasitas, sumbatan, pemeliharaan) dan penggunaannya sebagai fitur model | P1 |
| FR-16 | Peta rawan banjir berbasis DEM dan riwayat genangan | P1 |
| FR-17 | Ekspor data dan laporan periodik (CSV/PDF) | P2 |
| FR-18 | Informasi jalur evakuasi dan jalan tidak dapat dilalui | P2 |
| FR-19 | Simulasi skenario hujan (what-if) pada peta | P2 |
| FR-20 | Audit log seluruh tindakan administratif dan pengiriman peringatan | P1 |

## 8. Kebutuhan Non-Fungsional

| ID | Kategori | Kebutuhan |
| --- | --- | --- |
| NFR-01 | Kinerja | Endpoint baca dashboard p95 di bawah 500 ms pada beban 200 pengguna bersamaan |
| NFR-02 | Kinerja | Pipeline ingest sanggup menangani minimal 100 pesan sensor per detik pada perangkat keras server sederhana |
| NFR-03 | Ketersediaan | Layanan peringatan tetap berjalan saat dashboard bermasalah (komponen terpisah); target uptime 99% |
| NFR-04 | Keamanan | HTTPS wajib, hash kata sandi Argon2id, JWT berumur pendek, rate limiting, validasi input, perlindungan unggah file |
| NFR-05 | Keamanan perangkat | Sensor diautentikasi dengan token/kredensial per perangkat; MQTT memakai TLS |
| NFR-06 | Privasi | Data pribadi warga (nomor kontak, lokasi) diminimalkan, dienkripsi saat transit, dan sesuai UU Pelindungan Data Pribadi |
| NFR-07 | Ketahanan | Perangkat sensor menyimpan data sementara bila koneksi putus dan mengirim ulang (store-and-forward) |
| NFR-08 | Observabilitas | Log terstruktur, metrik (Prometheus), dan health check untuk semua layanan |
| NFR-09 | Pemeliharaan | Migrasi basis data terversi, CI untuk test dan lint, dokumentasi API (OpenAPI) |
| NFR-10 | Aksesibilitas | Antarmuka responsif untuk ponsel, bahasa Indonesia, kontras warna memadai untuk status peringatan |
| NFR-11 | Pencadangan | Backup basis data harian dan uji pemulihan berkala |

## 9. Kebutuhan Identitas Visual, Branding, dan Footer

Bagian ini bersifat **wajib** dan menjadi kriteria penerimaan (acceptance criteria).

| ID | Kebutuhan | Kriteria penerimaan |
| --- | --- | --- |
| BR-01 | Logo **Pemerintah Kabupaten Pesawaran** tampil pada header semua halaman utama | Logo terlihat di header dashboard, halaman login, dan halaman publik pada desktop dan ponsel |
| BR-02 | Logo **Universitas Teknokrat Indonesia** tampil pada header semua halaman utama, berdampingan dengan logo Pemda | Kedua logo tampil bersama, proporsional, tidak terdistorsi, memiliki teks alternatif (alt text) |
| BR-03 | Logo juga tampil pada halaman login, halaman publik, dan kop laporan PDF | Terverifikasi pada uji visual |
| BR-04 | Footer pada **seluruh halaman aplikasi** menampilkan teks persis: **Copyright©2026 by Kristian Anando dan Dr. Erliyan Redy Susanto, M.Kom** | Teks tampil identik (termasuk penulisan nama dan gelar) pada semua halaman, termasuk halaman login dan halaman error |
| BR-05 | Footer yang sama dicantumkan pada laporan PDF yang dihasilkan sistem | Terlihat di setiap halaman laporan |
| BR-06 | Berkas logo disediakan dalam format SVG atau PNG resolusi tinggi dengan latar transparan, disimpan sebagai aset statis terversi | Berkas ada di repositori dan dilayani dengan caching |

**Catatan penting:** berkas logo resmi Pemda Kabupaten Pesawaran dan Universitas Teknokrat Indonesia harus disediakan oleh tim proyek dari sumber resmi masing-masing institusi. Penggunaan logo mengikuti pedoman identitas visual masing-masing institusi dan memerlukan persetujuan/izin yang sesuai.

## 10. Arsitektur Sistem yang Diusulkan

```
Sensor IoT (ESP32 + LoRa/GSM)      API BMKG / Satelit        Laporan Warga (Web/Telegram)
          |                               |                              |
      MQTT (TLS)                    HTTP client                    HTTPS API
          |                               |                              |
          v                               v                              v
+-----------------------------------------------------------------------------+
|                          Backend Rust (Cargo workspace)                     |
|  ingest-service  |  rule-engine  |  predictor  |  api-server  |  notifier   |
+-----------------------------------------------------------------------------+
          |                  |                  |                |
          v                  v                  v                v
+-----------------------------------------------------------------------------+
|        PostgreSQL + PostGIS + TimescaleDB (data deret waktu dan spasial)    |
+-----------------------------------------------------------------------------+
                                   |
                                   v
          Dashboard web (peta, grafik, laporan)  +  Telegram/WhatsApp/SMS
```

**Komponen:**

- **ingest-service:** subscribe MQTT, memanggil API eksternal terjadwal, validasi, dan simpan.
- **rule-engine:** evaluasi ambang dan perubahan status, pencegahan alarm ganda.
- **predictor:** menjalankan model prediksi (inferensi) terjadwal per titik.
- **api-server:** REST API untuk dashboard, laporan warga, autentikasi, dan administrasi.
- **notifier:** antrean pengiriman notifikasi dengan retry dan pencatatan status kirim.

## 11. Validasi Teknologi: Rust dan PostgreSQL

Bagian ini memvalidasi apakah kebutuhan pada bagian 7 dan 8 dapat dipenuhi dengan Rust dan PostgreSQL.

### 11.1 Rekomendasi stack

| Lapisan | Pilihan | Alasan |
| --- | --- | --- |
| Bahasa backend | Rust (edisi stabil terbaru) | Kinerja tinggi, keamanan memori, konkurensi aman untuk ingest data real-time |
| Web framework | Axum + Tokio | Ekosistem matang, async, middleware (Tower) untuk auth, rate limit, tracing |
| Akses basis data | SQLx (query terverifikasi saat kompilasi) | Async, native PostgreSQL, migrasi terintegrasi |
| Basis data | PostgreSQL + PostGIS + TimescaleDB | Relasional, spasial, dan deret waktu dalam satu sistem |
| MQTT | rumqttc + broker Mosquitto atau EMQX | Klien MQTT async untuk Rust, broker standar industri |
| HTTP client | reqwest | Ambil data API BMKG/satelit |
| Penjadwalan | tokio-cron-scheduler atau tugas Tokio | Pengambilan data dan prediksi periodik |
| Autentikasi | argon2, jsonwebtoken | Hash kata sandi dan token sesi |
| Notifikasi | teloxide (Telegram), reqwest untuk gateway WhatsApp/SMS | Telegram Bot API didukung baik |
| Prediksi | Latih di Python (XGBoost/LSTM), ekspor ONNX, inferensi di Rust dengan crate ort; alternatif smartcore/linfa untuk model klasik | Memakai ekosistem ML Python untuk pelatihan, Rust untuk produksi |
| Data spasial | PostGIS (query), crate geo/geojson | Query titik terdekat, area terdampak, GeoJSON untuk peta |
| Frontend | Web SPA (React atau Svelte) + Leaflet/MapLibre; alternatif full-Rust: Leptos | Peta interaktif; frontend JS lebih cepat dikembangkan, opsi Leptos bila ingin satu bahasa |
| Observabilitas | tracing, metrics + Prometheus, Grafana | Pemantauan sistem |
| Deploy | Docker Compose, Nginx/Caddy reverse proxy | Sederhana untuk server pemerintah daerah |
| Pelaporan PDF | Pustaka Rust (mis. printpdf/genpdf) atau render HTML ke PDF lewat layanan pendukung | Kop logo dan footer wajib (BR-05) |

### 11.2 Pemetaan kebutuhan ke teknologi

| Kebutuhan | Dipenuhi oleh | Status validasi |
| --- | --- | --- |
| FR-01, FR-02 (ingest) | reqwest, rumqttc, Tokio | Layak. Rust sangat cocok untuk ingest konkuren |
| FR-03 (validasi) | Tipe kuat Rust, serde, aturan validasi di service, constraint PostgreSQL | Layak |
| FR-04 (data deret waktu, spasial) | TimescaleDB hypertable, PostGIS | Layak. Kompresi dan retensi data bawaan Timescale |
| FR-05 (status) | rule-engine di Rust, konfigurasi ambang di tabel PostgreSQL | Layak |
| FR-06 (dashboard) | Axum REST/WebSocket atau SSE, frontend SPA, MapLibre/Leaflet | Layak. Pembaruan real-time lewat SSE/WebSocket |
| FR-07, FR-13 (notifikasi) | teloxide, reqwest ke gateway; antrean tabel PostgreSQL (SKIP LOCKED) | Layak. Antrean di PostgreSQL cukup untuk skala kabupaten |
| FR-08 (auth) | Axum middleware, argon2, JWT | Layak |
| FR-09, FR-10 (laporan warga + foto) | Axum multipart, penyimpanan berkas lokal/S3 kompatibel, PostGIS | Layak, perlu validasi tipe dan ukuran berkas |
| FR-11, FR-12 (prediksi) | Pelatihan Python, inferensi ONNX di Rust | Layak dengan catatan, lihat 11.3 |
| FR-14 (manajemen perangkat) | Tabel perangkat, heartbeat MQTT, job deteksi offline | Layak |
| FR-15, FR-16 (drainase, peta rawan) | PostGIS, pra-pemrosesan DEM (GDAL/QGIS di luar aplikasi) | Layak |
| FR-17 (ekspor/laporan) | Query SQL, CSV, generator PDF | Layak, PDF di Rust butuh perhatian ekstra |
| FR-19 (simulasi what-if) | Perhitungan sederhana atau model hidrologi disederhanakan | Layak untuk versi sederhana; simulasi hidrodinamika penuh tidak disarankan di Rust pada tahap awal |
| NFR-01, NFR-02 (kinerja) | Rust + Axum + SQLx + indeks tepat | Layak. Rust biasanya memberi ruang kinerja besar pada beban skala kabupaten |
| NFR-04 (keamanan) | Keamanan memori Rust, TLS (rustls), validasi input | Layak |
| NFR-08 (observabilitas) | tracing, Prometheus exporter | Layak |
| NFR-11 (backup) | pg\_dump/pgBackRest/WAL archiving | Layak |
| BR-01 s.d. BR-06 (logo dan footer) | Aset statis di frontend, komponen footer tunggal (layout bersama), template laporan PDF | Layak. Implementasi sederhana, wajib diuji otomatis |

### 11.3 Risiko dan catatan hasil validasi

| Risiko | Dampak | Mitigasi |
| --- | --- | --- |
| Ekosistem ML Rust lebih kecil dari Python | Sulit melatih model kompleks (LSTM) langsung di Rust | Pelatihan di Python, ekspor ONNX, inferensi di Rust; mulai dari rule/threshold dan model klasik |
| Kurva belajar Rust (borrow checker, async) | Pengembangan awal lebih lambat | Batasi arsitektur modular, gunakan crate umum, code review, mulai dari MVP kecil |
| Waktu kompilasi Rust | Siklus pengembangan lebih lambat | cargo-watch, cache CI, pemisahan crate dalam workspace |
| Pustaka PDF Rust kurang kaya | Laporan berlogo dan footer sulit dirapikan | Mulai dari ekspor CSV dan halaman cetak HTML; PDF lanjutan di tahap berikutnya |
| Data historis banjir sedikit dan tidak seimbang | Model sulit akurat | Prediksi tinggi muka air (regresi) lebih dulu, resampling, evaluasi per kejadian |
| Ketergantungan API eksternal (BMKG/satelit) | Data bisa terlambat atau terhenti | Cache, fallback ke rain gauge sendiri, penanda data basi (stale) di dashboard |
| Ketersediaan listrik dan sinyal di lokasi sensor | Data terputus | Panel surya, LoRa/GSM, store-and-forward |
| Skala data deret waktu | Basis data membengkak | Hypertable, kompresi, kebijakan retensi dan continuous aggregate |

**Kesimpulan validasi:** seluruh kebutuhan P0 dan P1 dapat dipenuhi dengan Rust dan PostgreSQL. Satu-satunya area yang memerlukan strategi khusus adalah pelatihan model prediksi (disarankan di Python dengan inferensi di Rust via ONNX) dan pembuatan laporan PDF. Kombinasi ini dinilai sesuai untuk skala kabupaten, dengan catatan bahwa angka kinerja pada NFR perlu dibuktikan melalui uji beban.

## 12. Model Data Tingkat Tinggi (PostgreSQL)

| Tabel | Isi utama | Catatan |
| --- | --- | --- |
| users | id, nama, email, password\_hash, peran, status | Argon2id |
| stations | id, nama, jenis (hujan/sungai/drainase), geom (Point, SRID 4326), wilayah, ambang\_waspada, ambang\_siaga, ambang\_awas | Indeks GIST pada geom |
| devices | id, station\_id, token\_hash, last\_seen, firmware, status | Heartbeat |
| measurements | time, station\_id, rainfall\_mm, water\_level\_cm, quality\_flag | Hypertable TimescaleDB, kompresi dan retensi |
| external\_rainfall | time, sumber, area, rainfall\_mm | Dari BMKG/satelit |
| drainage\_assets | id, nama, geom (LineString), kapasitas, kondisi, terakhir\_dirawat | Fitur model |
| predictions | time, station\_id, horizon\_jam, nilai\_prediksi, status\_prediksi, model\_version | Evaluasi model |
| alerts | id, station\_id, status, dipicu\_pada, selesai\_pada, alasan | Riwayat peringatan |
| notifications | id, alert\_id, kanal, penerima, status\_kirim, percobaan, waktu | Antrean dan audit |
| subscribers | id, kanal, kontak\_terenkripsi, wilayah | Langganan warga |
| citizen\_reports | id, geom, foto\_path, tinggi\_cm, status\_verifikasi, pelapor, waktu | Validasi model |
| audit\_logs | id, user\_id, aksi, objek, waktu | Jejak audit |

## 13. Desain API (Ringkas)

| Endpoint | Metode | Fungsi |
| --- | --- | --- |
| /api/v1/auth/login | POST | Masuk dan menerima token |
| /api/v1/stations | GET | Daftar titik pantau beserta status (GeoJSON) |
| /api/v1/stations/{id}/measurements | GET | Data historis dengan rentang waktu |
| /api/v1/stations/{id}/predictions | GET | Prediksi terbaru |
| /api/v1/alerts | GET | Peringatan aktif dan riwayat |
| /api/v1/reports | POST/GET | Kirim dan lihat laporan warga |
| /api/v1/reports/{id}/verify | PATCH | Verifikasi oleh operator |
| /api/v1/subscriptions | POST | Langganan notifikasi |
| /api/v1/admin/stations | POST/PUT | Kelola titik pantau dan ambang |
| /api/v1/stream | GET (SSE/WebSocket) | Pembaruan real-time dashboard |
| /ingest (MQTT topic) | Publish | floodwatch/{station\_id}/data dari sensor |

## 14. Desain Antarmuka (Ringkas)

- **Header (semua halaman):** logo Pemda Kabupaten Pesawaran, logo Universitas Teknokrat Indonesia, dan nama aplikasi.
- **Halaman utama (dashboard):** peta dengan penanda berwarna per status, panel ringkasan, grafik curah hujan dan tinggi muka air, daftar peringatan aktif.
- **Detail titik pantau:** grafik historis dan prediksi, status perangkat, riwayat peringatan.
- **Halaman laporan warga:** formulir foto dan lokasi, serta peta laporan terverifikasi.
- **Halaman admin:** pengguna, perangkat, ambang, dan log.
- **Footer (semua halaman):** Copyright©2026 by Kristian Anando dan Dr. Erliyan Redy Susanto, M.Kom.

Warna status: Aman (hijau), Waspada (kuning), Siaga (oranye), Awas (merah), dengan ikon dan label teks agar tidak bergantung pada warna saja.

## 15. Logika Status dan Prediksi

**Tahap 1 (rule-based):** status ditentukan oleh ambang tinggi muka air dan akumulasi hujan 1/3/6 jam, dengan histeresis dan durasi minimum agar tidak berganti-ganti status.

**Tahap 2 (ML klasik):** model regresi (misalnya XGBoost) memprediksi tinggi muka air dengan fitur hujan terkini dan akumulasi, level air saat ini, kelembapan tanah (jika tersedia), serta kondisi drainase.

**Tahap 3 (deret waktu lanjut):** LSTM/GRU dibandingkan dengan tahap 1 dan 2.

**Evaluasi:** MAE/RMSE untuk regresi; precision, recall, F1 untuk status; lead time dan jumlah false alarm per bulan. Seluruh model diberi versi dan hasil evaluasi disimpan di basis data.

## 16. Rencana Rilis

| Fase | Cakupan | Keluaran |
| --- | --- | --- |
| Fase 1, MVP | FR-01 s.d. FR-08, FR-20, BR-01 s.d. BR-04, data BMKG/satelit, threshold, notifikasi Telegram | Dashboard dan peringatan dasar berlogo dan berfooter sesuai ketentuan |
| Fase 2 | Sensor level air 1-2 titik uji, FR-14, penyimpanan historis | Data lapangan pertama |
| Fase 3 | FR-11, FR-12, evaluasi model | Prediksi dan laporan perbandingan model |
| Fase 4 | FR-09, FR-10, FR-13, FR-15, FR-16 | Laporan warga, peta rawan, kanal tambahan |
| Fase 5 | FR-17 s.d. FR-19, uji lapangan, uji beban, evaluasi SUS | Rilis pilot bersama BPBD |

## 17. Strategi Pengujian

- **Unit dan integrasi:** cargo test, uji basis data dengan PostgreSQL uji (container).
- **Uji beban:** simulasi lonjakan pesan MQTT dan pengguna dashboard.
- **Uji prediksi:** backtesting pada data historis dan kejadian banjir nyata.
- **Uji notifikasi:** pengujian pengiriman, duplikasi, dan kegagalan kanal.
- **Uji visual dan konten:** pemeriksaan otomatis dan manual bahwa kedua logo dan teks footer BR-04 muncul pada seluruh halaman.
- **Uji keamanan:** pemindaian dependensi (cargo audit), uji otorisasi, dan uji unggah berkas.
- **Uji penerimaan pengguna (UAT):** bersama operator BPBD dan Dinas PU; kuesioner SUS.

## 18. Risiko Proyek

| Risiko | Mitigasi |
| --- | --- |
| Izin akses data instansi tertunda | Mulai dengan data terbuka dan sensor sendiri |
| Peringatan palsu berlebihan | Histeresis, verifikasi silang antar sensor, kalibrasi ambang bersama BPBD |
| Peringatan terlewat | Pemantauan kesehatan sensor, redundansi kanal notifikasi |
| Izin penggunaan logo belum diperoleh | Ajukan izin sejak awal; siapkan versi tanpa logo untuk pengembangan internal |
| Keterbatasan waktu dan sumber daya pengembangan | Prioritaskan P0, rilis bertahap |

## 19. Asumsi dan Pertanyaan Terbuka

1. Titik pantau dan wilayah pilot ditentukan bersama BPBD dan Dinas PU Kabupaten Pesawaran.
2. Ketersediaan akses data BMKG, BBWS, dan data historis banjir lokal perlu dikonfirmasi.
3. Pilihan kanal notifikasi utama (Telegram, WhatsApp resmi, atau SMS) menunggu keputusan dan anggaran.
4. Lokasi server (on-premise Pemda atau cloud) belum ditentukan.
5. Berkas logo resmi dan izin penggunaannya belum diterima.

## 20. Persetujuan

| Peran | Nama | Tanda tangan | Tanggal |
| --- | --- | --- | --- |
| Penyusun | Kristian Anando |  |  |
| Pembimbing | Dr. Erliyan Redy Susanto, M.Kom |  |  |
| Perwakilan Pemda/BPBD |  |  |  |

---

Copyright©2026 by Kristian Anando dan Dr. Erliyan Redy Susanto, M.Kom
