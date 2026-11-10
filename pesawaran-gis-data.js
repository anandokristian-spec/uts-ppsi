/**
 * PESAWARAN GIS DATASET - SISTEM FLOODWATCH PESAWARAN
 * Berdasarkan Data Spasial Resmi Kabupaten Pesawaran, Provinsi Lampung
 * 
 * Kolaborasi:
 * - Pemerintah Kabupaten Pesawaran (BPBD, Dinas PUPR, Dinas Kominfo)
 * - Universitas Teknokrat Indonesia (Fakultas Teknik & Ilmu Komputer)
 * 
 * Hak Cipta Sesuai PRD Bagian 9 (BR-04):
 * Copyright©2026 by Kristian Anando dan Dr. Erliyan Redy Susanto, M.Kom
 */

const PESAWARAN_GIS = {
  metadata: {
    regency: "Kabupaten Pesawaran",
    province: "Lampung",
    country: "Indonesia",
    capital: "Gedong Tataan",
    center: [-5.450, 105.160],
    bounds: [[-5.78, 105.00], [-5.15, 105.32]],
    totalKecamatan: 11,
    totalSensors: 14,
    leadAgencies: "BPBD Kabupaten Pesawaran & Universitas Teknokrat Indonesia",
    copyright: "Copyright©2026 by Kristian Anando dan Dr. Erliyan Redy Susanto, M.Kom",
    lastUpdated: "2026-11-10T20:00:00+07:00"
  },

  // Batas Administrasi 11 Kecamatan di Kabupaten Pesawaran (GeoJSON FeatureCollection)
  kecamatanGeoJSON: {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          id: "KEC-01",
          nama: "Gedong Tataan",
          tipe: "Ibukota Kabupaten",
          luas_km2: 97.06,
          desa_count: 19,
          populasi: 108420,
          kerawanan_banjir: "Tinggi",
          warna: "#ef4444",
          das_utama: "DAS Way Semah",
          stasiun_sensor: "STA-01 & STA-14",
          keterangan: "Pusat pemerintahan dan perdagangan; rawan luapan Way Semah di Bagelen, Sukaraja, dan Bernung."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [105.165, -5.345],
            [105.175, -5.335],
            [105.215, -5.340],
            [105.230, -5.365],
            [105.220, -5.390],
            [105.195, -5.405],
            [105.168, -5.398],
            [105.160, -5.370],
            [105.165, -5.345]
          ]]
        }
      },
      {
        type: "Feature",
        properties: {
          id: "KEC-02",
          nama: "Kedondong",
          tipe: "Kecamatan",
          luas_km2: 44.82,
          desa_count: 12,
          populasi: 41250,
          kerawanan_banjir: "Tinggi",
          warna: "#f97316",
          das_utama: "DAS Way Lima & Sungai Cikantor",
          stasiun_sensor: "STA-02 & STA-05",
          keterangan: "Lembah aluvial pertemuan Sungai Cikantor; area Pasar Baru Kedondong rawan banjir kiriman."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [105.125, -5.365],
            [105.140, -5.350],
            [105.162, -5.365],
            [105.165, -5.395],
            [105.155, -5.420],
            [105.130, -5.425],
            [105.120, -5.395],
            [105.125, -5.365]
          ]]
        }
      },
      {
        type: "Feature",
        properties: {
          id: "KEC-03",
          nama: "Way Lima",
          tipe: "Kecamatan",
          luas_km2: 56.40,
          desa_count: 16,
          populasi: 38900,
          kerawanan_banjir: "Tinggi",
          warna: "#f97316",
          das_utama: "DAS Way Lima Hulu & Way Padang Ratu",
          stasiun_sensor: "STA-02 & STA-07",
          keterangan: "Kawasan pertanian dataran banjir; rawan luapan cepat di Banjar Negeri dan Pekondoh."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [105.105, -5.395],
            [105.120, -5.385],
            [105.155, -5.405],
            [105.160, -5.435],
            [105.140, -5.460],
            [105.110, -5.455],
            [105.095, -5.420],
            [105.105, -5.395]
          ]]
        }
      },
      {
        type: "Feature",
        properties: {
          id: "KEC-04",
          nama: "Padang Cermin",
          tipe: "Kecamatan",
          luas_km2: 121.80,
          desa_count: 11,
          populasi: 29500,
          kerawanan_banjir: "Tinggi",
          warna: "#ef4444",
          das_utama: "DAS Way Ratai Hilir & Pesisir",
          stasiun_sensor: "STA-03",
          keterangan: "Daerah muara Way Ratai menuju Teluk Ratai; rawan banjir luapan sungai gabungan pasang laut."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [105.120, -5.550],
            [105.135, -5.525],
            [105.185, -5.540],
            [105.215, -5.565],
            [105.200, -5.600],
            [105.160, -5.615],
            [105.125, -5.590],
            [105.120, -5.550]
          ]]
        }
      },
      {
        type: "Feature",
        properties: {
          id: "KEC-05",
          nama: "Teluk Pandan",
          tipe: "Kecamatan",
          luas_km2: 85.30,
          desa_count: 10,
          populasi: 36700,
          kerawanan_banjir: "Sedang-Tinggi",
          warna: "#f59e0b",
          das_utama: "Sungai Pesisir & Muara Teluk Lampung",
          stasiun_sensor: "STA-04 & STA-13",
          keterangan: "Pesisir pantai Hanura & Mutun; rawan genangan pasang rob saat purnama dan banjir limpasan bukit."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [105.215, -5.490],
            [105.230, -5.470],
            [105.265, -5.485],
            [105.280, -5.520],
            [105.260, -5.555],
            [105.225, -5.560],
            [105.210, -5.525],
            [105.215, -5.490]
          ]]
        }
      },
      {
        type: "Feature",
        properties: {
          id: "KEC-06",
          nama: "Way Ratai",
          tipe: "Kecamatan",
          luas_km2: 108.60,
          desa_count: 10,
          populasi: 34100,
          kerawanan_banjir: "Sedang",
          warna: "#10b981",
          das_utama: "DAS Way Ratai Hulu",
          stasiun_sensor: "STA-12",
          keterangan: "Lembah pegunungan subur; debit hulu menjadi peringatan dini bagi Padang Cermin di hilir."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [105.065, -5.525],
            [105.080, -5.480],
            [105.135, -5.495],
            [105.145, -5.535],
            [105.125, -5.570],
            [105.085, -5.565],
            [105.065, -5.525]
          ]]
        }
      },
      {
        type: "Feature",
        properties: {
          id: "KEC-07",
          nama: "Way Khilau",
          tipe: "Kecamatan",
          luas_km2: 67.20,
          desa_count: 10,
          populasi: 31200,
          kerawanan_banjir: "Sedang",
          warna: "#10b981",
          das_utama: "Sub-DAS Way Sekampung Barat",
          stasiun_sensor: "STA-08",
          keterangan: "Perbatasan barat dengan Pringsewu; aliran sungai relatif lancar dengan beberapa titik cekungan."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [105.025, -5.415],
            [105.040, -5.380],
            [105.095, -5.395],
            [105.105, -5.435],
            [105.080, -5.465],
            [105.035, -5.455],
            [105.025, -5.415]
          ]]
        }
      },
      {
        type: "Feature",
        properties: {
          id: "KEC-08",
          nama: "Negeri Katon",
          tipe: "Kecamatan",
          luas_km2: 128.40,
          desa_count: 21,
          populasi: 72800,
          kerawanan_banjir: "Sedang",
          warna: "#f59e0b",
          das_utama: "DAS Way Semah Tengah",
          stasiun_sensor: "STA-09",
          keterangan: "Lumbung pangan padi; saluran irigasi memerlukan pantauan sedimentasi dan debit Way Semah."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [105.115, -5.305],
            [105.125, -5.245],
            [105.185, -5.255],
            [105.220, -5.290],
            [105.205, -5.335],
            [105.150, -5.340],
            [105.115, -5.305]
          ]]
        }
      },
      {
        type: "Feature",
        properties: {
          id: "KEC-09",
          nama: "Tegineneng",
          tipe: "Kecamatan",
          luas_km2: 112.50,
          desa_count: 16,
          populasi: 59400,
          kerawanan_banjir: "Rendah-Sedang",
          warna: "#10b981",
          das_utama: "Aliran DAS Way Sekampung",
          stasiun_sensor: "STA-06",
          keterangan: "Pintu gerbang utara Pesawaran di Jalan Tol Trans Sumatera; pemantauan jembatan sungai besar."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [105.125, -5.205],
            [105.145, -5.165],
            [105.220, -5.175],
            [105.235, -5.215],
            [105.205, -5.255],
            [105.140, -5.250],
            [105.125, -5.205]
          ]]
        }
      },
      {
        type: "Feature",
        properties: {
          id: "KEC-10",
          nama: "Punduh Pedada",
          tipe: "Kecamatan",
          luas_km2: 95.80,
          desa_count: 11,
          populasi: 16800,
          kerawanan_banjir: "Sedang",
          warna: "#10b981",
          das_utama: "DAS Way Semamu & Way Pedada",
          stasiun_sensor: "STA-10",
          keterangan: "Semenanjung pesisir selatan; pemantauan debit aliran muara ke Teluk Pedada."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [105.145, -5.640],
            [105.150, -5.585],
            [105.210, -5.605],
            [105.240, -5.645],
            [105.225, -5.695],
            [105.170, -5.690],
            [105.145, -5.640]
          ]]
        }
      },
      {
        type: "Feature",
        properties: {
          id: "KEC-11",
          nama: "Marga Punduh",
          tipe: "Kecamatan",
          luas_km2: 89.40,
          desa_count: 10,
          populasi: 15300,
          kerawanan_banjir: "Sedang",
          warna: "#10b981",
          das_utama: "DAS Way Punduh Barat",
          stasiun_sensor: "STA-11",
          keterangan: "Wilayah pesisir perbukitan; titik pemantauan hidrologis muara Kunyayan."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [105.095, -5.660],
            [105.110, -5.615],
            [105.165, -5.635],
            [105.175, -5.685],
            [105.155, -5.725],
            [105.105, -5.715],
            [105.095, -5.660]
          ]]
        }
      },
      {
        type: "Feature",
        properties: {
          id: "ISL-01",
          nama: "Gugusan Pulau Pahawang",
          tipe: "Wilayah Kepulauan",
          luas_km2: 12.50,
          desa_count: 2,
          populasi: 2400,
          kerawanan_banjir: "Rendah (Rob Pesisir)",
          warna: "#008378",
          das_utama: "Pesisir Teluk Lampung",
          stasiun_sensor: "STA-04 Jangkauan Sensor",
          keterangan: "Pulau Pahawang Besar & Kecil; ikon pariwisata bahari Pesawaran berpanorama terumbu karang."
        },
        geometry: {
          type: "MultiPolygon",
          coordinates: [
            // Pulau Pahawang Besar
            [[
              [105.205, -5.675],
              [105.210, -5.665],
              [105.230, -5.668],
              [105.235, -5.682],
              [105.215, -5.685],
              [105.205, -5.675]
            ]],
            // Pulau Kelagian
            [[
              [105.202, -5.628],
              [105.205, -5.618],
              [105.220, -5.620],
              [105.218, -5.630],
              [105.202, -5.628]
            ]]
          ]
        }
      }
    ]
  },

  // Jaringan Sungai Utama & DAS di Kabupaten Pesawaran (Polyline GeoJSON)
  sungaiGeoJSON: {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          nama: "Sungai Way Semah",
          das: "DAS Way Semah",
          panjang_km: 42.5,
          lebar_rata: "14-22 m",
          debit_normal: "18.5 m³/s",
          debit_saat_ini: "46.2 m³/s (Kenaikan Cepat)",
          kecamatan_lintas: "Negeri Katon, Gedong Tataan",
          stasiun_pantau: "STA-01 (Way Semah)",
          warna: "#0284c7"
        },
        geometry: {
          type: "LineString",
          coordinates: [
            [105.235, -5.385],
            [105.220, -5.370],
            [105.200, -5.365],
            [105.185, -5.368],
            [105.175, -5.355],
            [105.170, -5.335],
            [105.165, -5.300],
            [105.160, -5.270],
            [105.165, -5.240]
          ]
        }
      },
      {
        type: "Feature",
        properties: {
          nama: "Sungai Way Lima",
          das: "DAS Way Lima",
          panjang_km: 36.8,
          lebar_rata: "12-18 m",
          debit_normal: "14.2 m³/s",
          debit_saat_ini: "52.8 m³/s (Limpasan Kritis)",
          kecamatan_lintas: "Way Lima, Kedondong",
          stasiun_pantau: "STA-02 (Way Lima)",
          warna: "#ea580c"
        },
        geometry: {
          type: "LineString",
          coordinates: [
            [105.165, -5.435],
            [105.145, -5.420],
            [105.140, -5.405],
            [105.148, -5.388],
            [105.155, -5.375],
            [105.168, -5.365]
          ]
        }
      },
      {
        type: "Feature",
        properties: {
          nama: "Sungai Cikantor",
          das: "Sub-DAS Cikantor",
          panjang_km: 21.0,
          lebar_rata: "8-14 m",
          debit_normal: "9.5 m³/s",
          debit_saat_ini: "31.0 m³/s (Siaga)",
          kecamatan_lintas: "Kedondong",
          stasiun_pantau: "STA-05 (Sungai Cikantor)",
          warna: "#ea580c"
        },
        geometry: {
          type: "LineString",
          coordinates: [
            [105.130, -5.420],
            [105.140, -5.402],
            [105.153, -5.391],
            [105.150, -5.382]
          ]
        }
      },
      {
        type: "Feature",
        properties: {
          nama: "Sungai Way Padang Ratu",
          das: "DAS Way Padang Ratu",
          panjang_km: 28.4,
          lebar_rata: "10-16 m",
          debit_normal: "11.0 m³/s",
          debit_saat_ini: "24.5 m³/s",
          kecamatan_lintas: "Way Lima, Kedondong",
          stasiun_pantau: "STA-07 (Way Padang Ratu)",
          warna: "#0284c7"
        },
        geometry: {
          type: "LineString",
          coordinates: [
            [105.110, -5.440],
            [105.125, -5.415],
            [105.135, -5.390],
            [105.150, -5.378]
          ]
        }
      },
      {
        type: "Feature",
        properties: {
          nama: "Sungai Way Ratai",
          das: "DAS Way Ratai",
          panjang_km: 38.2,
          lebar_rata: "16-25 m",
          debit_normal: "15.0 m³/s",
          debit_saat_ini: "18.2 m³/s (Stabil)",
          kecamatan_lintas: "Way Ratai, Padang Cermin",
          stasiun_pantau: "STA-03 (Way Ratai)",
          warna: "#0d9488"
        },
        geometry: {
          type: "LineString",
          coordinates: [
            [105.090, -5.510],
            [105.110, -5.525],
            [105.130, -5.545],
            [105.152, -5.558],
            [105.175, -5.575],
            [105.195, -5.590]
          ]
        }
      },
      {
        type: "Feature",
        properties: {
          nama: "Sungai Way Punduh",
          das: "DAS Way Punduh",
          panjang_km: 24.6,
          lebar_rata: "10-15 m",
          debit_normal: "8.2 m³/s",
          debit_saat_ini: "9.0 m³/s (Normal)",
          kecamatan_lintas: "Marga Punduh, Punduh Pedada",
          stasiun_pantau: "STA-10 & STA-11",
          warna: "#0d9488"
        },
        geometry: {
          type: "LineString",
          coordinates: [
            [105.160, -5.600],
            [105.175, -5.620],
            [105.185, -5.635],
            [105.195, -5.660],
            [105.205, -5.680]
          ]
        }
      },
      {
        type: "Feature",
        properties: {
          nama: "Sungai Pesisir Way Gebang & Hurun",
          das: "Sub-DAS Pesisir Hanura",
          panjang_km: 16.5,
          lebar_rata: "6-12 m",
          debit_normal: "6.0 m³/s",
          debit_saat_ini: "14.8 m³/s (Terpengaruh Pasang)",
          kecamatan_lintas: "Teluk Pandan",
          stasiun_pantau: "STA-04 (Teluk Pandan)",
          warna: "#f59e0b"
        },
        geometry: {
          type: "LineString",
          coordinates: [
            [105.220, -5.475],
            [105.235, -5.490],
            [105.250, -5.505],
            [105.265, -5.512]
          ]
        }
      }
    ]
  },

  // 14 Stasiun Sensor Telemetri IoT Sesuai PRD (FR-02, FR-06, FR-14)
  stations: [
    {
      id: "STA-01",
      name: "Stasiun Way Semah",
      lokasi: "Jembatan Bagelen, Gedong Tataan",
      kecamatan: "Gedong Tataan",
      lat: -5.3685,
      lng: 105.1824,
      tma: 185,
      status: "Waspada",
      color: "#f59e0b",
      bgBadge: "#fffbeb",
      textBadge: "#92400e",
      hujan_1h: 28.0,
      trend: "+6 cm/jam",
      ambang_waspada: 150,
      ambang_siaga: 220,
      ambang_awas: 280,
      hardware: "ESP32 + GSM 4G Multi-SIM",
      baterai: 88,
      sinyal: "-68 dBm (Sangat Baik)",
      protokol: "MQTT TLS (rumqttc)",
      sensor_tipe: "Radar TMA non-kontak (24GHz)",
      lead_time: "45-60 menit",
      prediksi_ai: "Naik ke 205 cm dalam 2 jam (XGBoost ONNX)"
    },
    {
      id: "STA-02",
      name: "Stasiun Way Lima",
      lokasi: "Banjar Negeri, Way Lima",
      kecamatan: "Way Lima",
      lat: -5.3852,
      lng: 105.1486,
      tma: 240,
      status: "Siaga",
      color: "#f97316",
      bgBadge: "#fff7ed",
      textBadge: "#9a3412",
      hujan_1h: 48.5,
      trend: "+12 cm/jam",
      ambang_waspada: 180,
      ambang_siaga: 230,
      ambang_awas: 290,
      hardware: "ESP32 + LoRaWAN (AS923) + GSM Fallback",
      baterai: 94,
      sinyal: "SNR 9.2 dB / RSSI -72 dBm",
      protokol: "LoRaWAN gateway BPBD",
      sensor_tipe: "Ultrasonik JSN-SR04T Dual + Tipping Bucket",
      lead_time: "30-45 menit",
      prediksi_ai: "Meluap ke permukiman pada TMA 260 cm (LSTM)"
    },
    {
      id: "STA-03",
      name: "Stasiun Way Ratai",
      lokasi: "Jembatan Bunut, Padang Cermin",
      kecamatan: "Padang Cermin",
      lat: -5.5582,
      lng: 105.1518,
      tma: 92,
      status: "Aman",
      color: "#10b981",
      bgBadge: "#ecfdf5",
      textBadge: "#065f46",
      hujan_1h: 5.2,
      trend: "0 cm/jam (Stabil)",
      ambang_waspada: 160,
      ambang_siaga: 240,
      ambang_awas: 310,
      hardware: "ESP32 + LoRaWAN SX1262",
      baterai: 98,
      sinyal: "SNR 10.5 dB",
      protokol: "LoRaWAN repeater Betung",
      sensor_tipe: "Radar Non-kontak",
      lead_time: "> 120 menit",
      prediksi_ai: "Aliran normal, tidak ada indikasi kenaikan ekstrem"
    },
    {
      id: "STA-04",
      name: "Stasiun Teluk Pandan",
      lokasi: "Muara Pesisir Hanura",
      kecamatan: "Teluk Pandan",
      lat: -5.5124,
      lng: 105.2386,
      tma: 150,
      status: "Waspada",
      color: "#f59e0b",
      bgBadge: "#fffbeb",
      textBadge: "#92400e",
      hujan_1h: 31.4,
      trend: "+4 cm/jam (Pasang Laut)",
      ambang_waspada: 140,
      ambang_siaga: 210,
      ambang_awas: 270,
      hardware: "ESP32 + GSM 4G LTE-M",
      baterai: 82,
      sinyal: "-74 dBm",
      protokol: "MQTT TLS port 8883",
      sensor_tipe: "Pressure Transducer Submersible",
      lead_time: "Puncak rob 14:45 WIB",
      prediksi_ai: "Genangan rob 15-25 cm di area pesisir rendah"
    },
    {
      id: "STA-05",
      name: "Stasiun Sungai Cikantor",
      lokasi: "Pasar Baru Kedondong",
      kecamatan: "Kedondong",
      lat: -5.3912,
      lng: 105.1534,
      tma: 215,
      status: "Siaga",
      color: "#f97316",
      bgBadge: "#fff7ed",
      textBadge: "#9a3412",
      hujan_1h: 42.0,
      trend: "+9 cm/jam",
      ambang_waspada: 160,
      ambang_siaga: 200,
      ambang_awas: 260,
      hardware: "ESP32 + LoRaWAN",
      baterai: 91,
      sinyal: "SNR 8.4 dB",
      protokol: "LoRaWAN Gateway Kedondong",
      sensor_tipe: "Ultrasonik Industri IP67",
      lead_time: "30 menit",
      prediksi_ai: "Berpotensi merendam kios pasar dalam 50 menit"
    },
    {
      id: "STA-06",
      name: "Stasiun Tegineneng",
      lokasi: "Jembatan Batanghari Ogan / Sekampung",
      kecamatan: "Tegineneng",
      lat: -5.2140,
      lng: 105.1782,
      tma: 75,
      status: "Aman",
      color: "#10b981",
      bgBadge: "#ecfdf5",
      textBadge: "#065f46",
      hujan_1h: 0.0,
      trend: "0 cm/jam",
      ambang_waspada: 250,
      ambang_siaga: 350,
      ambang_awas: 450,
      hardware: "ESP32 + GSM 4G",
      baterai: 99,
      sinyal: "-65 dBm",
      protokol: "MQTT TLS",
      sensor_tipe: "Radar Tingkat Tinggi",
      lead_time: "> 180 menit",
      prediksi_ai: "Aliran dasar stabil terkendali"
    },
    {
      id: "STA-07",
      name: "Stasiun Way Padang Ratu",
      lokasi: "Desa Pagelaran Hulu",
      kecamatan: "Way Lima",
      lat: -5.3780,
      lng: 105.1240,
      tma: 168,
      status: "Waspada",
      color: "#f59e0b",
      bgBadge: "#fffbeb",
      textBadge: "#92400e",
      hujan_1h: 35.0,
      trend: "+7 cm/jam",
      ambang_waspada: 150,
      ambang_siaga: 210,
      ambang_awas: 270,
      hardware: "ESP32 + LoRaWAN",
      baterai: 89,
      sinyal: "SNR 7.8 dB",
      protokol: "LoRaWAN",
      sensor_tipe: "Ultrasonik + Rain Gauge",
      lead_time: "60 menit",
      prediksi_ai: "Kenaikan limpasan lereng Gunung Pesawaran"
    },
    {
      id: "STA-08",
      name: "Stasiun Way Khilau",
      lokasi: "Penyandingan, Way Khilau",
      kecamatan: "Way Khilau",
      lat: -5.4215,
      lng: 105.0842,
      tma: 80,
      status: "Aman",
      color: "#10b981",
      bgBadge: "#ecfdf5",
      textBadge: "#065f46",
      hujan_1h: 12.0,
      trend: "+1 cm/jam",
      ambang_waspada: 150,
      ambang_siaga: 220,
      ambang_awas: 280,
      hardware: "ESP32 + GSM 4G",
      baterai: 96,
      sinyal: "-78 dBm",
      protokol: "MQTT TLS",
      sensor_tipe: "Ultrasonik Waterproof",
      lead_time: "> 120 menit",
      prediksi_ai: "Debit air normal, drainase lancar"
    },
    {
      id: "STA-09",
      name: "Stasiun Negeri Katon",
      lokasi: "Bendung Irigasi Roworejo",
      kecamatan: "Negeri Katon",
      lat: -5.2840,
      lng: 105.1620,
      tma: 172,
      status: "Waspada",
      color: "#f59e0b",
      bgBadge: "#fffbeb",
      textBadge: "#92400e",
      hujan_1h: 26.5,
      trend: "+5 cm/jam",
      ambang_waspada: 160,
      ambang_siaga: 230,
      ambang_awas: 290,
      hardware: "ESP32 + GSM 4G",
      baterai: 87,
      sinyal: "-71 dBm",
      protokol: "MQTT TLS",
      sensor_tipe: "Radar 24GHz",
      lead_time: "75 menit",
      prediksi_ai: "Aliran irigasi meningkat, waspada limpasan sawah"
    },
    {
      id: "STA-10",
      name: "Stasiun Way Semamu",
      lokasi: "Jembatan Bawang, Punduh Pedada",
      kecamatan: "Punduh Pedada",
      lat: -5.6320,
      lng: 105.1840,
      tma: 65,
      status: "Aman",
      color: "#10b981",
      bgBadge: "#ecfdf5",
      textBadge: "#065f46",
      hujan_1h: 2.1,
      trend: "-2 cm/jam",
      ambang_waspada: 140,
      ambang_siaga: 200,
      ambang_awas: 260,
      hardware: "ESP32 + Solar LoRaWAN",
      baterai: 97,
      sinyal: "SNR 11.2 dB",
      protokol: "LoRaWAN",
      sensor_tipe: "Ultrasonik",
      lead_time: "> 180 menit",
      prediksi_ai: "Kondisi muara stabil"
    },
    {
      id: "STA-11",
      name: "Stasiun Marga Punduh",
      lokasi: "Kunyayan Hilir",
      kecamatan: "Marga Punduh",
      lat: -5.6740,
      lng: 105.1480,
      tma: 58,
      status: "Aman",
      color: "#10b981",
      bgBadge: "#ecfdf5",
      textBadge: "#065f46",
      hujan_1h: 1.5,
      trend: "0 cm/jam",
      ambang_waspada: 130,
      ambang_siaga: 190,
      ambang_awas: 250,
      hardware: "ESP32 + Solar GSM",
      baterai: 95,
      sinyal: "-82 dBm",
      protokol: "MQTT TLS",
      sensor_tipe: "Ultrasonik",
      lead_time: "> 180 menit",
      prediksi_ai: "Debit air rendah ke pesisir"
    },
    {
      id: "STA-12",
      name: "Stasiun Wates Way Ratai",
      lokasi: "Wates Hulu, Way Ratai",
      kecamatan: "Way Ratai",
      lat: -5.5280,
      lng: 105.1120,
      tma: 88,
      status: "Aman",
      color: "#10b981",
      bgBadge: "#ecfdf5",
      textBadge: "#065f46",
      hujan_1h: 8.0,
      trend: "+1 cm/jam",
      ambang_waspada: 150,
      ambang_siaga: 220,
      ambang_awas: 280,
      hardware: "ESP32 + LoRaWAN",
      baterai: 93,
      sinyal: "SNR 8.9 dB",
      protokol: "LoRaWAN",
      sensor_tipe: "Ultrasonik + Rain Gauge",
      lead_time: "> 120 menit",
      prediksi_ai: "Aliran normal lereng selatan"
    },
    {
      id: "STA-13",
      name: "Stasiun Sukajaya Lempasing",
      lokasi: "Bantaran Pantai Mutun",
      kecamatan: "Teluk Pandan",
      lat: -5.4860,
      lng: 105.2520,
      tma: 145,
      status: "Waspada",
      color: "#f59e0b",
      bgBadge: "#fffbeb",
      textBadge: "#92400e",
      hujan_1h: 22.0,
      trend: "+3 cm/jam",
      ambang_waspada: 135,
      ambang_siaga: 195,
      ambang_awas: 250,
      hardware: "ESP32 + GSM 4G",
      baterai: 84,
      sinyal: "-69 dBm",
      protokol: "MQTT TLS",
      sensor_tipe: "Pressure Tide Gauge",
      lead_time: "Puncak rob sore",
      prediksi_ai: "Waspada genangan rob pesisir pemukiman nelayan"
    },
    {
      id: "STA-14",
      name: "Stasiun Posko Induk BPBD",
      lokasi: "Kompleks Perkantoran Pemda, Gedong Tataan",
      kecamatan: "Gedong Tataan",
      lat: -5.3620,
      lng: 105.1910,
      tma: 60,
      status: "Aman",
      color: "#10b981",
      bgBadge: "#ecfdf5",
      textBadge: "#065f46",
      hujan_1h: 15.0,
      trend: "0 cm/jam",
      ambang_waspada: 120,
      ambang_siaga: 180,
      ambang_awas: 240,
      hardware: "Gateway Utama SX1302 LoRaWAN + Base Station",
      baterai: 100,
      sinyal: "Ethernet Fiber Pemda + LoRa",
      protokol: "MQTT Broker EMQX & TimescaleDB",
      sensor_tipe: "Weather Station Lengkap + Rain Gauge Otomatis",
      lead_time: "Pusat Kendali",
      prediksi_ai: "Pusat Komando Telemetri & Ingest Data Lapangan"
    }
  ],

  // Zona Rawan Banjir InaRISK BPBD Kabupaten Pesawaran (FR-16)
  inaRiskZones: [
    {
      id: "ZONA-01",
      nama: "Zona Banjir Luapan DAS Way Semah",
      tingkat: "Tinggi",
      color: "#ef4444",
      kecamatan: "Gedong Tataan & Negeri Katon",
      desa_terdampak: "Desa Bagelen, Sukaraja, Bernung, Karang Anyar",
      luas_hektar: 420.5,
      populasi_rentan: 14500,
      riwayat_banjir: "Februari 2024 (TMA 265 cm, 350 rumah tergenang)",
      koordinat: [
        [-5.355, 105.168],
        [-5.362, 105.205],
        [-5.385, 105.210],
        [-5.392, 105.175],
        [-5.370, 105.162]
      ]
    },
    {
      id: "ZONA-02",
      nama: "Zona Cekungan Banjir Way Lima & Kedondong",
      tingkat: "Tinggi",
      color: "#f97316",
      kecamatan: "Kedondong & Way Lima",
      desa_terdampak: "Pasar Baru Kedondong, Banjar Negeri, Pekondoh",
      luas_hektar: 380.0,
      populasi_rentan: 12800,
      riwayat_banjir: "Maret 2024 (TMA 280 cm, akses jalan putus)",
      koordinat: [
        [-5.372, 105.132],
        [-5.395, 105.162],
        [-5.425, 105.155],
        [-5.420, 105.122],
        [-5.385, 105.120]
      ]
    },
    {
      id: "ZONA-03",
      nama: "Zona Muara & Dataran Banjir Way Ratai",
      tingkat: "Tinggi",
      color: "#ef4444",
      kecamatan: "Padang Cermin",
      desa_terdampak: "Desa Padang Cermin, Bunut, Tambak Jaya",
      luas_hektar: 290.0,
      populasi_rentan: 8400,
      riwayat_banjir: "Desember 2023 (Limpasan muara pasang laut)",
      koordinat: [
        [-5.545, 105.135],
        [-5.560, 105.185],
        [-5.585, 105.195],
        [-5.595, 105.150],
        [-5.565, 105.128]
      ]
    },
    {
      id: "ZONA-04",
      nama: "Zona Pesisir Pasang Rob Teluk Pandan",
      tingkat: "Sedang-Tinggi",
      color: "#f59e0b",
      kecamatan: "Teluk Pandan",
      desa_terdampak: "Desa Hanura, Sukajaya Lempasing, Hurun",
      luas_hektar: 165.0,
      populasi_rentan: 6200,
      riwayat_banjir: "Rutin saat siklus Pasang Purnama (Tinggi genangan 15-40 cm)",
      koordinat: [
        [-5.485, 105.238],
        [-5.500, 105.268],
        [-5.535, 105.275],
        [-5.530, 105.242],
        [-5.505, 105.228]
      ]
    }
  ],

  // Laporan Warga Geotagged (FR-09 & FR-10)
  citizenReports: [
    {
      id: "REP-001",
      lat: -5.3780,
      lng: 105.1720,
      lokasi: "Desa Bagelen, Gedong Tataan",
      detail_lokasi: "Jl. Raya Kedondong KM 2, RT 03/RW 01 dekat sawah",
      tinggi_cm: 35,
      status: "Terverifikasi BPBD",
      badge_color: "#10b981",
      pelapor: "Hendra Wijaya (Warga)",
      waktu: "13:50 WIB (48 mnt lalu)",
      keterangan: "Air mulai meluap dari saluran irigasi ke badan jalan setinggi betis, kendaraan motor matic mogok.",
      petugas_verifikasi: "Danang (TRC BPBD Reg. 1)"
    },
    {
      id: "REP-002",
      lat: -5.3920,
      lng: 105.1450,
      lokasi: "Pasar Baru Kedondong",
      detail_lokasi: "Area pertokoan barat, bantaran Cikantor",
      tinggi_cm: 45,
      status: "Terverifikasi BPBD",
      badge_color: "#10b981",
      pelapor: "Samsul Bahri (Pedagang Pasar)",
      waktu: "13:15 WIB (1.2 jam lalu)",
      keterangan: "Debit sungai Cikantor naik cepat. Air setinggi lutut mulai masuk selasar kios sayur.",
      petugas_verifikasi: "Rudi Hartono (Pusdalops)"
    },
    {
      id: "REP-003",
      lat: -5.4860,
      lng: 105.2520,
      lokasi: "Desa Sukajaya Lempasing, Teluk Pandan",
      detail_lokasi: "Dermaga Nelayan RT 02",
      tinggi_cm: 20,
      status: "Terverifikasi BPBD",
      badge_color: "#10b981",
      pelapor: "Ahmad Zaelani",
      waktu: "12:40 WIB (2 jam lalu)",
      keterangan: "Pasang air laut rob mulai menggenangi jalan dermaga dan pelataran rumah nelayan.",
      petugas_verifikasi: "TRC Posko Hanura"
    },
    {
      id: "REP-004",
      lat: -5.4120,
      lng: 105.1380,
      lokasi: "Desa Banjar Negeri, Way Lima",
      detail_lokasi: "Dusun Sukamaju dekat jembatan gantung",
      tinggi_cm: 50,
      status: "Menunggu Verifikasi",
      badge_color: "#f59e0b",
      pelapor: "Yudi Purnomo",
      waktu: "14:10 WIB (25 mnt lalu)",
      keterangan: "Sungai Way Lima hampir sejajar dengan lantai jembatan, arus sangat deras berlumpur.",
      petugas_verifikasi: "Dalam proses patroli TRC"
    },
    {
      id: "REP-005",
      lat: -5.5720,
      lng: 105.1650,
      lokasi: "Desa Bunut, Padang Cermin",
      detail_lokasi: "Bantaran Way Ratai RT 01",
      tinggi_cm: 15,
      status: "Terverifikasi BPBD",
      badge_color: "#10b981",
      pelapor: "Kurniawan",
      waktu: "11:20 WIB (3 jam lalu)",
      keterangan: "Genangan sisa hujan deras pagi hari, drainase mulai mengalirkan air menuju muara.",
      petugas_verifikasi: "Posko Padang Cermin"
    },
    {
      id: "REP-006",
      lat: -5.3520,
      lng: 105.2050,
      lokasi: "Desa Bernung, Gedong Tataan",
      detail_lokasi: "Jl. Lintas Barat KM 18",
      tinggi_cm: 30,
      status: "Menunggu Verifikasi",
      badge_color: "#f59e0b",
      pelapor: "Rina Kusuma",
      waktu: "14:25 WIB (10 mnt lalu)",
      keterangan: "Gorong-gorong tersumbat sampah pohon tumbang, air tergenang menutup lajur jalan.",
      petugas_verifikasi: "Petugas PU Pesawaran meluncur"
    }
  ],

  // Titik Pengungsian & Jalur Evakuasi Aman (FR-18)
  evacuationCenters: [
    {
      id: "EVAC-01",
      nama: "Gedung Serbaguna (GSG) Pemkab Pesawaran",
      lokasi: "Kompleks Pemda Pesawaran, Gedong Tataan",
      lat: -5.3620,
      lng: 105.1910,
      kapasitas: "800 Jiwa",
      fasilitas: "Dapur Umum BPBD, Posko Medis, Listrik Genset, Logistik",
      kontak: "Call Center BPBD 112 / (0721) 987654"
    },
    {
      id: "EVAC-02",
      nama: "Kantor Camat Gedong Tataan",
      lokasi: "Jl. Raya Kedondong No. 1, Gedong Tataan",
      lat: -5.3650,
      lng: 105.1850,
      kapasitas: "400 Jiwa",
      fasilitas: "Ruang Pengungsian Ramah Lansia & Anak, Tenda Darurat",
      kontak: "Posko Kecamatan (0721) 987112"
    },
    {
      id: "EVAC-03",
      nama: "GSG Kedondong / Balai Desa",
      lokasi: "Jl. Lapangan Merdeka, Kedondong",
      lat: -5.3900,
      lng: 105.1550,
      kapasitas: "500 Jiwa",
      fasilitas: "Tenda Pengungsi TRC, Dapur Lapangan PMI",
      kontak: "Destana Kedondong: 0812-7654-3210"
    },
    {
      id: "EVAC-04",
      nama: "Balai Pertemuan Warga Padang Cermin",
      lokasi: "Jl. Way Urang, Padang Cermin",
      lat: -5.5550,
      lng: 105.1520,
      kapasitas: "300 Jiwa",
      fasilitas: "Posko Darurat Pesisir, Tenaga Medis Puskesmas",
      kontak: "Puskesmas Padang Cermin: 0813-8877-6655"
    },
    {
      id: "EVAC-05",
      nama: "Puskesmas Rawat Inap Hanura",
      lokasi: "Jl. Raya Hanura, Teluk Pandan",
      lat: -5.5120,
      lng: 105.2380,
      kapasitas: "200 Jiwa (Prioritas Medis & Anak)",
      fasilitas: "Layanan IGD 24 Jam, Tabung Oksigen, Ruang Steril",
      kontak: "IGD Hanura: 0852-6900-1122"
    }
  ],

  // Jalur Evakuasi Bebas Banjir (Garis Panduan Pengungsian)
  evacuationRoutes: [
    {
      nama: "Jalur Evakuasi 1: Bagelen/Sukaraja ke GSG Pemkab",
      tipe: "Rute Utama Bebas Banjir",
      color: "#006194",
      coordinates: [
        [-5.3780, 105.1720],
        [-5.3710, 105.1800],
        [-5.3660, 105.1860],
        [-5.3620, 105.1910]
      ]
    },
    {
      nama: "Jalur Evakuasi 2: Pasar Kedondong ke GSG Lapangan",
      tipe: "Rute Cepat Tanggap Darurat",
      color: "#006194",
      coordinates: [
        [-5.3920, 105.1450],
        [-5.3900, 105.1500],
        [-5.3900, 105.1550]
      ]
    },
    {
      nama: "Jalur Evakuasi 3: Bantaran Muara Bunut ke Balai Padang Cermin",
      tipe: "Rute Evakuasi Ketinggian",
      color: "#006194",
      coordinates: [
        [-5.5720, 105.1650],
        [-5.5620, 105.1580],
        [-5.5550, 105.1520]
      ]
    }
  ]
};

// Export untuk modul Node.js / Browser Global
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PESAWARAN_GIS;
}

// Ekspos ke scope global agar terbaca oleh window.PESAWARAN_GIS di halaman
if (typeof window !== 'undefined') { window.PESAWARAN_GIS = PESAWARAN_GIS; }
