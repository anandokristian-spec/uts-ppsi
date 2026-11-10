FloodWatch Pesawaran - paket deploy (situs statis, tanpa build)
1. Upload SELURUH isi folder ini ke hosting statis (Netlify, Vercel, GitHub Pages, cPanel public_html).
2. index.html harus berada di root situs.
3. Butuh internet di sisi pengunjung (Tailwind, Leaflet, Google Fonts, tile peta dimuat dari CDN).
4. Lokal: jalankan "python -m http.server 8000" di folder ini, buka http://localhost:8000
Catatan: data sensor adalah simulasi prototipe (pesawaran-gis-data.js), bukan data realtime.
