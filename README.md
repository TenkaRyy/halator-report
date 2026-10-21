<![CDATA[<p align="center">
  <img src="public/logo.jpeg" alt="Halator AI Logo" width="120" />
</p>

<h1 align="center">Halator AI — Halal Auditor Berbasis Kecerdasan Buatan</h1>

<p align="center">
  <strong>Aplikasi Web Audit Kehalalan Produk, Proses, dan Transaksi Keuangan Syariah Berbasis AI (Gemini)</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-React%2019%20%2B%20Vite-blue?style=flat-square" />
  <img src="https://img.shields.io/badge/Backend-Express.js%20%2B%20MongoDB-green?style=flat-square" />
  <img src="https://img.shields.io/badge/AI%20Engine-Google%20Gemini%201.5%20Flash-orange?style=flat-square" />
  <img src="https://img.shields.io/badge/Bahasa-Indonesia%20%26%20English-purple?style=flat-square" />
</p>

---

## Daftar Isi

1. [Deskripsi Umum Aplikasi](#1-deskripsi-umum-aplikasi)
2. [Arsitektur Sistem](#2-arsitektur-sistem)
3. [Teknologi yang Digunakan (Tech Stack)](#3-teknologi-yang-digunakan-tech-stack)
4. [Fitur-Fitur Utama Aplikasi](#4-fitur-fitur-utama-aplikasi)
   - [4.1 Halaman Beranda (Landing Page)](#41-halaman-beranda-landing-page)
   - [4.2 Sistem Autentikasi Pengguna](#42-sistem-autentikasi-pengguna)
   - [4.3 Dashboard Pengguna](#43-dashboard-pengguna)
   - [4.4 Audit Produk (Product Audit)](#44-audit-produk-product-audit)
   - [4.5 Audit Proses Produksi (Process Audit)](#45-audit-proses-produksi-process-audit)
   - [4.6 Audit Transaksi Keuangan Syariah (Transaction Audit)](#46-audit-transaksi-keuangan-syariah-transaction-audit)
   - [4.7 Edukasi Halal (Education)](#47-edukasi-halal-education)
   - [4.8 Riwayat Audit (History)](#48-riwayat-audit-history)
   - [4.9 Program Afiliasi (Affiliate)](#49-program-afiliasi-affiliate)
   - [4.10 Halaman Langganan (Subscription)](#410-halaman-langganan-subscription)
   - [4.11 Pengaturan Profil Pengguna](#411-pengaturan-profil-pengguna)
5. [Fitur Pendukung Lainnya](#5-fitur-pendukung-lainnya)
6. [Struktur Folder Proyek](#6-struktur-folder-proyek)
7. [Cara Menjalankan Secara Lokal](#7-cara-menjalankan-secara-lokal)
8. [Panduan Deployment](#8-panduan-deployment)
9. [Daftar Endpoint API Backend](#9-daftar-endpoint-api-backend)
10. [Catatan Keamanan](#10-catatan-keamanan)

---

## 1. Deskripsi Umum Aplikasi

**Halator AI** adalah sebuah aplikasi web berbasis kecerdasan buatan yang dirancang untuk membantu pengguna (konsumen Muslim) dalam melakukan audit kehalalan terhadap tiga aspek utama, yaitu:

1. **Produk** — Menganalisis komposisi bahan pangan untuk menentukan status halal, haram, atau syubhat dari setiap bahan yang terkandung di dalamnya.
2. **Proses Produksi** — Mengevaluasi proses produksi suatu usaha berdasarkan standar Sistem Jaminan Produk Halal (HAS 23000 / BPJPH / LPPOM MUI).
3. **Transaksi Keuangan** — Menganalisis suatu transaksi keuangan berdasarkan prinsip Fiqh al-Muamalat untuk mendeteksi unsur Riba, Gharar, dan Maysir.

Aplikasi ini menggunakan kecerdasan buatan **Google Gemini 1.5 Flash** sebagai mesin analisis utama, serta dilengkapi dengan **mesin rule-based (berbasis aturan)** sebagai cadangan apabila layanan AI tidak tersedia. Hal ini memastikan aplikasi tetap dapat berfungsi secara offline tanpa koneksi internet ke layanan AI.

> **Catatan Penting:** Aplikasi ini merupakan aplikasi **single-role (satu peran)** yang hanya ditujukan untuk **pengguna (user)** saja. Tidak terdapat halaman atau panel khusus untuk administrator (admin). Seluruh pengguna yang mendaftar akan memiliki peran `user` dan mengakses fitur-fitur yang sama.

---

## 2. Arsitektur Sistem

Aplikasi Halator AI menggunakan arsitektur **client-server** yang terdiri dari dua bagian terpisah:

```
┌─────────────────────────────────────────────────────┐
│                   FRONTEND (Client)                 │
│         React 19 + Vite + TailwindCSS 4             │
│        Deploy ke: Vercel / Cloudflare Pages          │
└────────────────────┬────────────────────────────────┘
                     │ HTTP REST API (JSON)
                     │ Bearer Token (JWT)
┌────────────────────▼────────────────────────────────┐
│                   BACKEND (Server)                  │
│         Express.js + Mongoose + JWT + bcrypt         │
│          Deploy ke: Railway / Render.com             │
└────────────────────┬────────────────────────────────┘
                     │ Mongoose ODM
┌────────────────────▼────────────────────────────────┐
│                    DATABASE                         │
│               MongoDB Atlas (Cloud)                 │
│            Koleksi: users, audithistories,          │
│                     affiliates                      │
└─────────────────────────────────────────────────────┘
```

- **Frontend** berjalan di sisi klien (browser pengguna) dan berkomunikasi dengan backend melalui REST API.
- **Backend** menerima permintaan dari frontend, memproses logika bisnis, dan menyimpan/mengambil data dari database MongoDB.
- **Database** menggunakan MongoDB Atlas (cloud) untuk menyimpan data pengguna, riwayat audit, dan data afiliasi secara terpusat.
- **AI Engine** (Gemini 1.5 Flash) dipanggil di sisi frontend untuk melakukan analisis audit secara real-time.

---

## 3. Teknologi yang Digunakan (Tech Stack)

### Frontend
| Teknologi | Versi | Fungsi |
|---|---|---|
| **React** | 19.1.1 | Pustaka utama untuk membangun antarmuka pengguna berbasis komponen |
| **Vite** | 6.2.0 | Alat pengembangan dan bundler modern yang sangat cepat |
| **TypeScript** | 5.8.2 | Superset JavaScript yang menambahkan sistem tipe statis |
| **TailwindCSS** | 4.2.2 | Framework CSS utility-first untuk mendesain antarmuka secara cepat |
| **React Router DOM** | 7.14.1 | Pustaka routing untuk navigasi antar halaman pada SPA (Single Page Application) |
| **Motion (Framer Motion)** | 12.38.0 | Pustaka animasi deklaratif untuk React |
| **Recharts** | 3.8.1 | Pustaka grafik/chart berbasis React untuk visualisasi data di dashboard |
| **Lucide React** | 1.8.0 | Koleksi ikon SVG modern dan ringan |
| **Sonner** | 2.0.7 | Pustaka notifikasi toast yang elegan |
| **React Markdown** | 10.1.0 | Komponen untuk merender teks Markdown menjadi HTML |
| **date-fns** | 4.1.0 | Pustaka utilitas manipulasi tanggal dan waktu |
| **Google GenAI SDK** | 1.20.0 | SDK resmi Google untuk mengakses API Gemini AI |
| **jsPDF** | 2.5.1 | Pustaka untuk mengekspor hasil audit ke format PDF |
| **html2canvas** | 1.4.1 | Pustaka untuk menangkap tampilan elemen HTML sebagai gambar |

### Backend
| Teknologi | Versi | Fungsi |
|---|---|---|
| **Express.js** | 4.21.2 | Framework web minimalis untuk Node.js sebagai REST API server |
| **Mongoose** | 8.10.1 | ODM (Object Data Modeling) untuk berinteraksi dengan MongoDB |
| **bcryptjs** | 3.0.3 | Pustaka untuk mengenkripsi (hashing) kata sandi pengguna |
| **jsonwebtoken (JWT)** | 9.0.2 | Pustaka untuk membuat dan memverifikasi token autentikasi |
| **Helmet** | 8.1.0 | Middleware keamanan untuk mengatur header HTTP guna mencegah serangan XSS, Clickjacking, dsb. |
| **Morgan** | 1.10.0 | Middleware pencatatan log (logging) setiap permintaan HTTP |
| **CORS** | 2.8.5 | Middleware untuk mengatur kebijakan Cross-Origin Resource Sharing |
| **dotenv** | 16.4.7 | Pustaka untuk memuat variabel lingkungan dari file `.env` |

### Database & Infrastruktur
| Teknologi | Fungsi |
|---|---|
| **MongoDB Atlas** | Database NoSQL berbasis cloud untuk menyimpan data pengguna, riwayat audit, dan afiliasi |
| **Vercel** | Platform hosting untuk deploy frontend (React + Vite) |
| **Railway / Render.com** | Platform hosting untuk deploy backend (Express.js) |
| **Docker** | Kontainerisasi backend (tersedia Dockerfile siap pakai) |

---

## 4. Fitur-Fitur Utama Aplikasi

### 4.1 Halaman Beranda (Landing Page)

Halaman beranda merupakan halaman pertama yang dilihat pengunjung saat mengakses website Halator AI. Halaman ini bersifat publik dan dapat diakses tanpa perlu masuk (login).

**Fitur yang tersedia di halaman beranda:**
- **Hero Section** — Tampilan utama dengan judul, deskripsi singkat, dan tombol ajakan bertindak (CTA) untuk mendaftar atau masuk.
- **Bagian Masalah (Problem)** — Menjelaskan permasalahan yang dihadapi konsumen Muslim dalam mengidentifikasi kehalalan produk.
- **Bagian Solusi (Solution)** — Menjelaskan bagaimana Halator AI menjadi solusi atas permasalahan tersebut.
- **Fitur Layanan Utama** — Menampilkan empat layanan utama: Audit Produk, Audit Proses, Audit Transaksi, dan Edukasi Halal.
- **Bagian Testimoni** — Menampilkan ulasan dan testimoni dari pengguna.
- **Bagian FAQ (Pertanyaan yang Sering Diajukan)** — Menjawab pertanyaan umum seputar layanan Halator AI, dimuat secara dinamis dari data tersimpan.
- **Footer** — Berisi informasi perusahaan, tautan kebijakan privasi, dan hak cipta.
- **Navigasi Header** — Header khusus untuk halaman beranda dengan tombol navigasi ke halaman login dan registrasi, serta tombol pengalih tema (gelap/terang).

### 4.2 Sistem Autentikasi Pengguna

Sistem autentikasi memungkinkan pengguna untuk mendaftar akun baru dan masuk ke akun yang sudah ada.

**Halaman Registrasi (Daftar):**
- Formulir pendaftaran yang meminta data: nama lengkap, alamat email, kata sandi, jenis kelamin, nomor telepon, nama usaha, dan alamat usaha.
- Terdapat kolom opsional **kode referral** (kode afiliasi) yang dapat diisi jika pengguna direferensikan oleh pengguna lain.
- Validasi duplikasi email — sistem akan menolak pendaftaran jika email sudah terdaftar sebelumnya.
- Kata sandi dienkripsi menggunakan algoritma **bcryptjs** dengan 10 salt rounds sebelum disimpan ke database, sehingga kata sandi asli tidak pernah tersimpan secara langsung.
- Setelah berhasil mendaftar, pengguna otomatis menerima token autentikasi (JWT) dan diarahkan ke halaman dashboard.
- Setiap pengguna baru secara otomatis mendapatkan paket langganan **Free** dengan kuota 5 audit per bulan.
- Avatar pengguna digenerate secara otomatis menggunakan layanan DiceBear berdasarkan nama pengguna.
- Kode afiliasi unik digenerate secara otomatis untuk setiap pengguna baru.

**Halaman Login (Masuk):**
- Formulir masuk yang meminta alamat email dan kata sandi.
- Validasi kredensial — sistem membandingkan kata sandi yang dimasukkan dengan hash yang tersimpan di database.
- Jika berhasil, pengguna menerima token JWT dan diarahkan ke halaman dashboard.
- Pesan kesalahan yang informatif jika email atau kata sandi salah.

**Mekanisme Keamanan Autentikasi:**
- **JWT (JSON Web Token)** — Setiap sesi login menghasilkan token yang berlaku selama 7 hari.
- **Auth Guard** — Halaman-halaman privat (dashboard, audit, profil, dll.) dilindungi oleh penjaga autentikasi. Jika pengguna belum login, mereka akan dialihkan ke halaman login secara otomatis.
- **Penyimpanan Ganda** — Data autentikasi disimpan secara lokal (localStorage) dan disinkronkan dengan server backend (MongoDB) untuk konsistensi data.

### 4.3 Dashboard Pengguna

Dashboard merupakan halaman utama setelah pengguna berhasil masuk. Halaman ini menampilkan ringkasan statistik dan visualisasi data aktivitas audit pengguna.

**Komponen yang ditampilkan di dashboard:**
- **Kartu Statistik (Stat Cards):**
  - Total Audit yang telah dilakukan oleh pengguna.
  - Jumlah Audit Produk yang telah dilakukan.
  - Jumlah Audit Transaksi yang telah dilakukan.
  - Skor Kepatuhan (Compliance Score) — persentase hasil audit yang memenuhi standar halal/syariah dari seluruh audit yang pernah dilakukan.
- **Grafik Area (Area Chart)** — Visualisasi tren aktivitas audit pengguna dalam 7 hari terakhir, menampilkan distribusi jumlah audit per hari.
- **Grafik Batang (Bar Chart)** — Visualisasi distribusi jumlah audit berdasarkan tipe (Produk, Proses, Transaksi).
- **Daftar Aktivitas Terbaru** — Menampilkan 5 riwayat audit terbaru lengkap dengan tipe, ringkasan input, dan waktu pelaksanaan. Setiap item dapat diklik untuk melihat detail lengkap.
- **Sinkronisasi Data** — Saat halaman dashboard dibuka, sistem secara otomatis menyinkronkan data riwayat audit antara penyimpanan lokal dan server backend.

### 4.4 Audit Produk (Product Audit)

Fitur audit produk merupakan fitur inti pertama dari Halator AI yang berfungsi untuk menganalisis komposisi bahan pangan suatu produk guna menentukan status kehalalan setiap bahan yang terkandung.

**Metode Input yang Tersedia:**

1. **Input Manual (Ketik Teks)**
   - Pengguna dapat mengetikkan nama produk dan daftar komposisi bahan secara manual pada kolom teks yang disediakan.
   - Bahan-bahan dapat dipisahkan menggunakan tanda koma, titik koma, baris baru, atau kata hubung "dan"/"and".
   - Contoh input: `Tepung terigu, gula, minyak kelapa sawit, pengemulsi E471, perisa vanila, gelatin`

2. **Input Gambar / OCR (Pindai Foto)**
   - Pengguna dapat mengunggah foto label komposisi bahan pada kemasan produk.
   - Sistem AI (Gemini Vision) akan secara otomatis membaca teks pada gambar (OCR) dan menganalisis setiap bahan yang terdeteksi.
   - Format gambar yang didukung: JPEG, PNG, WebP, GIF.

**Proses Analisis:**
- Setiap bahan yang terdeteksi akan dianalisis dan diklasifikasikan ke dalam salah satu dari tiga kategori:
  - ✅ **Halal** — Bahan yang jelas halal dan suci, seperti bahan pangan nabati alami (tepung, gula, garam, minyak nabati, rempah, dll.).
  - ❌ **Haram** — Bahan yang secara syariat Islam jelas diharamkan, seperti babi dan turunannya, alkohol/khamr, darah, dan bangkai.
  - ⚠️ **Syubhat** — Bahan yang meragukan dan memerlukan verifikasi lebih lanjut, seperti gelatin, pengemulsi E471, karmin, L-sistein, rennet, gliserin, perisa, dan kolagen.
- Setiap klasifikasi disertai dengan **alasan yang jelas** dalam bahasa Indonesia, mengacu pada dalil Al-Quran, Hadits, Fatwa MUI, dan standar BPJPH.

**Basis Pengetahuan (Knowledge Base):**
- Sistem memiliki basis data aturan (rule-based) yang komprehensif mencakup puluhan bahan pangan dengan referensi kepada:
  - Al-Quran (QS. Al-Baqarah: 173, QS. Al-Maidah: 3)
  - Fatwa MUI (No. 10/2018, No. 33/2011)
  - Standar HAS 23000 / BPJPH
  - Codex Alimentarius
- Basis pengetahuan ini berfungsi sebagai **cadangan (fallback)** apabila layanan AI Gemini tidak tersedia.

**Penyimpanan Hasil:**
- Setiap hasil audit secara otomatis disimpan ke riwayat audit pengguna (lokal dan server).
- Kuota audit bulanan pengguna akan berkurang 1 setiap kali melakukan audit.

### 4.5 Audit Proses Produksi (Process Audit)

Fitur audit proses berfungsi untuk mengevaluasi kepatuhan proses produksi suatu usaha terhadap Sistem Jaminan Produk Halal (SJPH) berdasarkan standar HAS 23000 / BPJPH / LPPOM MUI.

**Metode Input yang Tersedia:**

1. **Checklist Manual (Isi Daftar Periksa)**
   - Sistem menyediakan 9 pertanyaan checklist yang mencakup empat kategori:
     - **Bahan (Ingredients):**
       - Apakah semua bahan baku memiliki sertifikat halal yang valid?
       - Apakah ada prosedur verifikasi kehalalan bahan baru sebelum produksi?
     - **Fasilitas Produksi:**
       - Apakah fasilitas produksi didedikasikan khusus untuk produk halal?
       - Apakah peralatan produksi dalam keadaan suci dan bebas najis?
     - **Proses Produksi:**
       - Apakah ada prosedur pembersihan syar'i (sertu/samak) jika terkontaminasi najis mughallazhah?
       - Apakah ada risiko kontaminasi silang antara bahan halal dan non-halal?
     - **Penyimpanan & Transportasi:**
       - Apakah pekerja mendapat pelatihan SJPH?
       - Apakah produk halal disimpan terpisah dari produk non-halal?
       - Apakah kendaraan transportasi dijamin tidak terkontaminasi?
   - Setiap pertanyaan dijawab dengan **Ya (Yes)**, **Tidak (No)**, atau **Tidak Berlaku (N/A)**.

2. **Input Dokumen / Gambar (Unggah Dokumen)**
   - Pengguna dapat mengunggah foto atau scan dokumen SOP, sertifikat, atau catatan proses produksi.
   - AI Gemini Vision akan menganalisis isi dokumen dan secara otomatis mengisi jawaban checklist berdasarkan informasi yang terdeteksi pada dokumen.

**Hasil Analisis Proses:**
- **Ringkasan (Summary)** — Penjelasan naratif mengenai kondisi kepatuhan proses produksi.
- **Daftar Risiko (Risks)** — Rincian setiap titik kritis yang ditemukan tidak memenuhi standar, lengkap dengan penjelasan mengapa hal tersebut berisiko.
- **Penilaian Akhir (Assessment):**
  - 🟢 **Compliant (Memenuhi Standar)** — Seluruh aspek telah memenuhi standar SJPH.
  - 🟡 **Needs Improvement (Perlu Peningkatan)** — Sebagian besar sudah baik, namun ada beberapa aspek minor yang perlu diperbaiki.
  - 🔴 **Non-compliant (Tidak Memenuhi Standar)** — Ditemukan kegagalan kritis yang harus segera ditangani.

### 4.6 Audit Transaksi Keuangan Syariah (Transaction Audit)

Fitur audit transaksi berfungsi untuk menganalisis suatu skema atau transaksi keuangan berdasarkan prinsip Fiqh al-Muamalat (Hukum Ekonomi Islam).

**Cara Menggunakan:**
- Pengguna menuliskan deskripsi atau skenario transaksi keuangan pada kolom teks yang disediakan.
- Tersedia **contoh transaksi yang disarankan (suggested transactions)** yang dapat langsung diklik untuk dianalisis, meliputi:
  - Kredit Kepemilikan Rumah (KPR) Konvensional
  - Asuransi Jiwa
  - Jual Beli Ijon (Forward Sale)
  - Skema Investasi "Money Game"

**Aspek yang Dianalisis:**
Setiap transaksi dianalisis terhadap tiga unsur yang dilarang dalam muamalah syariah:
- **Riba** — Tambahan atas pokok utang tanpa akad pertukaran riil (bunga, denda keterlambatan, pinjaman berbunga, dll.).
- **Gharar** — Ketidakjelasan atau spekulasi berlebihan pada objek, harga, atau waktu penyerahan dalam transaksi.
- **Maysir** — Unsur perjudian, taruhan, atau keuntungan yang bergantung pada untung-untungan semata.

**Hasil Analisis Transaksi:**
- **Putusan (Verdict):**
  - ✅ **Permissible (Diperbolehkan)** — Transaksi bebas dari unsur Riba, Gharar, dan Maysir.
  - ❌ **Impermissible (Tidak Diperbolehkan / Haram)** — Terdeteksi unsur yang melanggar ketentuan syariah.
  - ⚠️ **Doubtful (Meragukan / Syubhat)** — Terdapat potensi ketidaksesuaian yang perlu ditelaah lebih lanjut.
- **Penjelasan (Explanation)** — Uraian lengkap dalam bahasa Indonesia mengapa transaksi tersebut mendapatkan putusan tersebut, disertai dalil dan referensi.
- **Analisis Rinci** — Indikator boolean (ya/tidak) untuk masing-masing unsur: Riba, Gharar, dan Maysir.

**Fitur Tanya Jawab Lanjutan (Follow-Up Chat):**
- Setelah hasil analisis ditampilkan, pengguna dapat mengajukan pertanyaan lanjutan terkait transaksi yang telah dianalisis.
- AI akan menjawab pertanyaan dengan mempertimbangkan konteks analisis sebelumnya dan riwayat percakapan.
- Fitur ini memungkinkan pengguna mendalami aspek-aspek tertentu dari transaksi yang dianalisis.

### 4.7 Edukasi Halal (Education)

Fitur edukasi menyediakan konten pembelajaran seputar literasi halal dan ekonomi syariah untuk meningkatkan pemahaman pengguna.

**Komponen Edukasi:**

1. **Artikel Edukasi**
   - Terdapat beberapa artikel yang disusun dalam kategori:
     - **Ingredients (Bahan)** — Panduan memahami E-Number halal dan kode bahan tambahan makanan.
     - **Business (Bisnis)** — Prinsip dasar ekonomi syariah (Riba, Gharar, Maysir).
     - **Workflow (Alur Kerja)** — Langkah-langkah mendapatkan sertifikasi halal BPJPH.
   - Setiap artikel dapat dibuka dan dibaca secara lengkap dalam tampilan modal.
   - Pengguna dapat memfilter artikel berdasarkan kategori.

2. **Pencarian Kamus Halal (Halal Dictionary Search)**
   - Pengguna dapat mencari istilah atau bahan tertentu, misalnya: `E471`, `gelatin`, `riba`, `gharar`, `karmin`, dll.
   - Sistem akan memberikan penjelasan lengkap mengenai istilah tersebut, meliputi:
     - Nama istilah/bahan
     - Status kehalalan
     - Penjelasan detail dalam bahasa Indonesia
     - Referensi (Al-Quran, Hadits, Fatwa MUI, Codex Alimentarius)
     - Tautan sumber terpercaya (halal.go.id, halalmui.org, dsnmui.or.id)
   - Didukung oleh AI Gemini dan basis pengetahuan built-in sebagai cadangan.

3. **Topik Cepat (Quick Topics)**
   - Tombol-tombol pintasan untuk langsung mencari istilah populer seperti: E471, Gelatin, Riba, Gharar, Karmin, dll.

### 4.8 Riwayat Audit (History)

Fitur riwayat menyimpan dan menampilkan seluruh catatan audit yang pernah dilakukan oleh pengguna.

**Fitur yang Tersedia:**
- **Daftar Riwayat** — Menampilkan semua audit yang pernah dilakukan, diurutkan dari yang terbaru.
- **Filter berdasarkan Tipe** — Pengguna dapat memfilter riwayat berdasarkan tipe audit: Semua, Produk, Proses, atau Transaksi.
- **Pencarian (Search)** — Kolom pencarian untuk mencari riwayat berdasarkan kata kunci pada input atau output audit.
- **Detail Riwayat** — Setiap item riwayat dapat diklik untuk melihat detail lengkap hasil audit, termasuk input yang diberikan dan output analisis.
- **Hapus Riwayat** — Pengguna dapat menghapus item riwayat tertentu dengan konfirmasi terlebih dahulu.
- **Sinkronisasi Otomatis** — Saat halaman riwayat dibuka, data secara otomatis disinkronkan antara penyimpanan lokal dan server backend (MongoDB).
- **Indikator Visual** — Setiap item riwayat menampilkan ikon dan warna yang berbeda sesuai tipe auditnya, serta status hasil audit (Halal/Compliant/Permissible ditandai hijau, Haram/Non-compliant/Impermissible ditandai merah, Syubhat/Doubtful ditandai kuning).

### 4.9 Program Afiliasi (Affiliate)

Fitur afiliasi memungkinkan pengguna untuk mengundang orang lain menggunakan Halator AI dan mendapatkan komisi dari setiap referral yang berhasil.

**Fitur yang Tersedia:**
- **Kode Afiliasi Unik** — Setiap pengguna memiliki kode afiliasi unik yang digenerate otomatis saat mendaftar (contoh: `JEFR1234`).
- **Tautan Referral** — Tautan undangan yang dapat dibagikan, berformat: `https://halalauditor.ai/ref/KODE_ANDA`.
- **Tombol Salin (Copy)** — Tombol untuk menyalin tautan referral ke clipboard dengan satu klik.
- **Statistik Afiliasi:**
  - Jumlah total referral (pengguna yang mendaftar melalui tautan afiliasi).
  - Total pendapatan komisi yang terkumpul.
  - Riwayat penarikan (payout history) lengkap dengan tanggal, jumlah, dan status.
- **Pengajuan Penarikan (Payout Request)** — Tombol untuk mengajukan penarikan komisi ke rekening pengguna.

### 4.10 Halaman Langganan (Subscription)

Halaman langganan menampilkan paket-paket berlangganan yang tersedia beserta fitur yang didapatkan pada setiap paket.

**Paket yang Tersedia:**

| Paket | Harga | Fitur |
|---|---|---|
| **Free (Gratis)** | Rp 0 | 5 audit produk per bulan, checklist proses dasar, dukungan komunitas, notifikasi email |
| **Pro** | Rp 149.000/bulan | Audit produk tak terbatas, audit proses lengkap (HAS 23000), analisis transaksi, dukungan prioritas, ekspor laporan PDF, akses afiliasi |
| **Enterprise** | Kustom | Akses multi-pengguna, alur kerja audit kustom, integrasi API, manajer akun khusus, pelatihan di tempat |

- Pengguna baru otomatis mendapatkan paket **Free** dengan kuota 5 audit per bulan.
- Tersedia tombol untuk meningkatkan paket ke Pro atau menghubungi tim penjualan untuk paket Enterprise.

### 4.11 Pengaturan Profil Pengguna

Halaman profil memungkinkan pengguna untuk mengelola informasi akun dan preferensi aplikasi.

**Tab yang Tersedia:**

1. **Tab Profil:**
   - Mengedit nama lengkap, email, jenis kelamin, nomor telepon, nama usaha, dan alamat usaha.
   - Menampilkan avatar pengguna yang digenerate secara otomatis.
   - Menyimpan perubahan ke server backend (MongoDB) dan penyimpanan lokal secara bersamaan.

2. **Tab Tampilan (Appearance):**
   - **Pengalih Tema (Theme Toggle)** — Beralih antara mode terang (light) dan mode gelap (dark).
   - **Pengalih Bahasa (Language Toggle)** — Beralih antara Bahasa Indonesia dan Bahasa Inggris.
   - **Konfigurasi URL Server Backend** — Pengguna dapat memasukkan URL server backend kustom jika ingin menghubungkan ke server yang berbeda. Terdapat tombol **Tes Koneksi** untuk memverifikasi konektivitas.

3. **Tab Akun:**
   - **Tombol Logout (Keluar)** — Menghapus sesi login dan mengarahkan pengguna kembali ke halaman beranda.
   - **Tombol Hapus Akun** — Menghapus akun pengguna secara permanen dari server dan penyimpanan lokal dengan konfirmasi terlebih dahulu.

---

## 5. Fitur Pendukung Lainnya

### 5.1 Dukungan Dua Bahasa (Bilingual / i18n)
- Seluruh antarmuka aplikasi mendukung dua bahasa: **Bahasa Indonesia** dan **Bahasa Inggris**.
- Pengguna dapat mengganti bahasa kapan saja melalui pengaturan profil.
- Terjemahan disimpan dalam file `translations.ts` yang berisi lebih dari 500 baris teks terjemahan.

### 5.2 Mode Gelap dan Terang (Dark/Light Theme)
- Aplikasi mendukung dua mode tampilan: mode terang (light) dan mode gelap (dark).
- Tema secara otomatis mendeteksi preferensi sistem operasi pengguna saat pertama kali diakses.
- Pilihan tema disimpan di localStorage sehingga tetap konsisten saat pengguna mengakses kembali.

### 5.3 Desain Responsif (Responsive Design)
- Seluruh halaman didesain responsif dan dapat diakses dengan baik pada berbagai ukuran layar:
  - **Desktop** — Menggunakan layout sidebar di sisi kiri untuk navigasi.
  - **Tablet** — Layout yang menyesuaikan dengan lebar layar.
  - **Mobile** — Sidebar digantikan oleh **bottom navigation bar** (bilah navigasi bawah) untuk kemudahan akses.

### 5.4 Navigasi Aplikasi
- **Sidebar (Desktop)** — Panel navigasi tetap di sisi kiri layar yang menampilkan menu: Dashboard, Audit Produk, Audit Proses, Audit Transaksi, Edukasi, Riwayat, Afiliasi, dan Langganan.
- **Bottom Bar (Mobile)** — Bilah navigasi di bagian bawah layar untuk perangkat mobile dengan ikon dan label menu utama.
- **Topbar** — Bilah atas yang menampilkan judul halaman aktif, tombol pengalih tema, dan avatar pengguna.

### 5.5 Mode Offline (Offline Fallback)
- Aplikasi dirancang dengan arsitektur **offline-first**. Jika koneksi ke server backend atau layanan AI Gemini tidak tersedia:
  - Autentikasi dan penyimpanan data tetap berfungsi melalui **localStorage** di browser.
  - Analisis audit tetap berfungsi menggunakan **mesin rule-based (berbasis aturan)** yang tertanam di dalam kode frontend.
  - Sinkronisasi data akan dilakukan secara otomatis ketika koneksi kembali tersedia.

### 5.6 Ekspor Laporan PDF
- Hasil audit dapat diekspor ke format PDF menggunakan pustaka jsPDF dan html2canvas.
- Laporan PDF mencakup detail lengkap hasil analisis audit.

### 5.7 Notifikasi Toast
- Sistem notifikasi toast yang informatif dan elegan menggunakan pustaka Sonner.
- Notifikasi muncul untuk memberitahu pengguna mengenai keberhasilan, kesalahan, atau informasi penting lainnya.

### 5.8 Animasi dan Transisi
- Seluruh komponen menggunakan animasi dan transisi yang halus menggunakan pustaka Motion (Framer Motion).
- Efek hover, efek masuk/keluar halaman, dan animasi loading memberikan pengalaman pengguna yang modern dan nyaman.

---

## 6. Struktur Folder Proyek

```
halator-report/
├── public/                     # Aset statis publik
│   ├── logo.jpeg               # Logo aplikasi Halator
│   └── _redirects               # Konfigurasi redirect untuk Cloudflare Pages
│
├── components/                 # Komponen UI yang dapat digunakan ulang
│   ├── AppSidebar.tsx           # Sidebar navigasi untuk tampilan desktop
│   ├── AppTopbar.tsx            # Bilah atas (topbar) aplikasi
│   ├── AuditResult.tsx          # Komponen penampil hasil audit
│   ├── Header.tsx               # Komponen header umum
│   ├── Icons.tsx                # Koleksi ikon SVG kustom
│   ├── LandingHeader.tsx        # Header khusus halaman beranda
│   ├── MobileBottomBar.tsx      # Bilah navigasi bawah untuk mobile
│   └── Spinner.tsx              # Komponen indikator pemuatan (loading)
│
├── screens/                    # Halaman-halaman utama aplikasi
│   ├── HomeScreen.tsx           # Halaman beranda (landing page)
│   ├── LoginScreen.tsx          # Halaman masuk (login)
│   ├── RegisterScreen.tsx       # Halaman pendaftaran (register)
│   ├── DashboardScreen.tsx      # Halaman dashboard pengguna
│   ├── ProductAuditScreen.tsx   # Halaman audit produk
│   ├── ProcessAuditScreen.tsx   # Halaman audit proses produksi
│   ├── TransactionAuditScreen.tsx # Halaman audit transaksi keuangan
│   ├── EducationScreen.tsx      # Halaman edukasi halal
│   ├── HistoryScreen.tsx        # Halaman riwayat audit
│   ├── AffiliateScreen.tsx      # Halaman program afiliasi
│   ├── SubscriptionScreen.tsx   # Halaman paket langganan
│   └── ProfileScreen.tsx        # Halaman pengaturan profil
│
├── services/                   # Layanan logika bisnis
│   ├── geminiService.ts         # Layanan AI Gemini + mesin rule-based
│   ├── api.ts                   # Layanan komunikasi REST API ke backend
│   └── storage.ts               # Layanan penyimpanan lokal (localStorage)
│
├── hooks/                      # Custom React Hooks
│   └── useLanguage.ts           # Hook untuk manajemen bahasa (i18n)
│
├── server/                     # Backend REST API (Express.js)
│   ├── src/
│   │   ├── index.ts             # Entry point server Express
│   │   ├── config/
│   │   │   ├── db.ts            # Konfigurasi koneksi MongoDB
│   │   │   └── storageEngine.ts # Mesin penyimpanan cadangan lokal
│   │   ├── controllers/
│   │   │   ├── authController.ts     # Logika autentikasi (register, login, profil)
│   │   │   ├── auditController.ts    # Logika riwayat audit (CRUD + statistik)
│   │   │   └── affiliateController.ts # Logika program afiliasi
│   │   ├── middleware/
│   │   │   └── auth.ts          # Middleware autentikasi JWT
│   │   ├── models/
│   │   │   ├── User.ts          # Skema Mongoose untuk koleksi pengguna
│   │   │   ├── AuditHistory.ts  # Skema Mongoose untuk koleksi riwayat audit
│   │   │   └── Affiliate.ts    # Skema Mongoose untuk koleksi afiliasi
│   │   └── routes/
│   │       ├── authRoutes.ts    # Rute API autentikasi
│   │       ├── auditRoutes.ts   # Rute API audit
│   │       └── affiliateRoutes.ts # Rute API afiliasi
│   ├── Dockerfile               # Konfigurasi Docker untuk kontainerisasi
│   ├── Procfile                 # Konfigurasi untuk Railway/Heroku
│   ├── package.json             # Dependensi dan skrip backend
│   └── tsconfig.json            # Konfigurasi TypeScript backend
│
├── App.tsx                     # Komponen utama aplikasi (routing + layout)
├── index.tsx                   # Entry point React (render ke DOM)
├── index.html                  # File HTML utama
├── index.css                   # Stylesheet global
├── types.ts                    # Definisi tipe TypeScript
├── constants.ts                # Konstanta (pertanyaan checklist audit proses)
├── translations.ts             # File terjemahan dua bahasa (ID/EN)
├── seedData.ts                 # Data benih untuk pengembangan
├── package.json                # Dependensi dan skrip frontend
├── vite.config.ts              # Konfigurasi Vite (build tool)
├── tailwind.config.js          # Konfigurasi TailwindCSS
├── tsconfig.json               # Konfigurasi TypeScript frontend
├── vercel.json                 # Konfigurasi deployment Vercel
├── .env.example                # Contoh file variabel lingkungan frontend
├── .gitignore                  # Daftar file yang diabaikan oleh Git
├── DEPLOYMENT_GUIDE.md         # Panduan lengkap deployment ke cloud
└── README.md                   # Dokumentasi proyek (file ini)
```

---

## 7. Cara Menjalankan Secara Lokal

### Prasyarat
- **Node.js** versi 18 atau lebih baru
- **npm** (terinstal bersama Node.js)
- **MongoDB** (lokal atau MongoDB Atlas)

### Langkah 1: Menjalankan Frontend

```powershell
# Masuk ke folder proyek
cd halator-report

# Instal dependensi
npm install

# Salin file contoh variabel lingkungan
copy .env.example .env

# Edit file .env dan masukkan API Key Gemini Anda
# GEMINI_API_KEY=your_api_key_here

# Jalankan server pengembangan
npm run dev
```

Frontend akan berjalan di `http://localhost:3000`.

### Langkah 2: Menjalankan Backend

```powershell
# Masuk ke folder server
cd halator-report/server

# Instal dependensi
npm install

# Salin file contoh variabel lingkungan
copy .env.example .env

# Edit file .env dan masukkan Connection String MongoDB Anda
# MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/halator

# Jalankan server pengembangan
npm run dev
```

Backend akan berjalan di `http://localhost:5000`.

---

## 8. Panduan Deployment

### MongoDB Atlas (Database Cloud)
1. Buat akun di [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas).
2. Buat cluster gratis (M0 Free Tier).
3. Buat database user dan atur Network Access ke `0.0.0.0/0`.
4. Salin Connection String untuk digunakan pada backend.

### Railway (Backend)
1. Buka [railway.app](https://railway.app) dan hubungkan dengan akun GitHub.
2. Deploy dari repositori GitHub, pilih root folder `server`.
3. Masukkan variabel lingkungan: `MONGODB_URI`, `JWT_SECRET`, `NODE_ENV=production`.
4. Railway akan secara otomatis mendeteksi `Procfile` dan memulai server.

### Vercel (Frontend)
1. Buka [vercel.com](https://vercel.com) dan hubungkan dengan akun GitHub.
2. Import repositori GitHub.
3. Konfigurasi sudah tersedia di file `vercel.json` (framework: Vite, output: dist).
4. Masukkan variabel lingkungan: `VITE_API_URL` (URL backend dari Railway), `GEMINI_API_KEY`.
5. Deploy dan dapatkan URL publik.

> Panduan deployment yang lebih lengkap dan detail tersedia di file [`DEPLOYMENT_GUIDE.md`](DEPLOYMENT_GUIDE.md).

---

## 9. Daftar Endpoint API Backend

### Autentikasi (`/api/auth`)
| Metode | Endpoint | Deskripsi | Proteksi |
|---|---|---|---|
| `POST` | `/api/auth/register` | Mendaftarkan akun baru dan menghasilkan token JWT | Publik |
| `POST` | `/api/auth/login` | Masuk ke akun dan memvalidasi kata sandi | Publik |
| `GET` | `/api/auth/me` | Mengambil data profil pengguna yang sedang login | Bearer Token |
| `PUT` | `/api/auth/profile` | Memperbarui data profil pengguna | Bearer Token |
| `DELETE` | `/api/auth/account` | Menghapus akun pengguna secara permanen | Bearer Token |

### Audit Halal (`/api/audit`)
| Metode | Endpoint | Deskripsi | Proteksi |
|---|---|---|---|
| `GET` | `/api/audit/history` | Mengambil daftar riwayat audit milik pengguna | Bearer Token |
| `POST` | `/api/audit/history` | Menyimpan hasil audit baru ke database | Bearer Token |
| `DELETE` | `/api/audit/history/:id` | Menghapus item riwayat audit tertentu | Bearer Token |
| `GET` | `/api/audit/stats` | Mengambil statistik total audit dan distribusi tipe | Bearer Token |

### Afiliasi (`/api/affiliate`)
| Metode | Endpoint | Deskripsi | Proteksi |
|---|---|---|---|
| `GET` | `/api/affiliate` | Mengambil data afiliasi pengguna (referral, komisi, riwayat) | Bearer Token |
| `POST` | `/api/affiliate/payout` | Mengajukan penarikan komisi afiliasi | Bearer Token |

### Utilitas
| Metode | Endpoint | Deskripsi | Proteksi |
|---|---|---|---|
| `GET` | `/` | Informasi dasar API (nama, versi, status) | Publik |
| `GET` | `/api/health` | Pemeriksaan kesehatan server dan status koneksi database | Publik |

---

## 10. Catatan Keamanan

1. **Enkripsi Kata Sandi** — Seluruh kata sandi pengguna dienkripsi menggunakan algoritma bcryptjs dengan 10 salt rounds sebelum disimpan ke database. Kata sandi asli tidak pernah disimpan dalam bentuk teks biasa.
2. **Token JWT** — Autentikasi menggunakan JSON Web Token dengan masa berlaku 7 hari. Token dikirimkan melalui header `Authorization: Bearer <token>`.
3. **Helmet** — Server backend dilengkapi dengan middleware Helmet untuk mengatur header keamanan HTTP (mencegah XSS, Clickjacking, Content-Type Sniffing, dll.).
4. **CORS** — Kebijakan Cross-Origin Resource Sharing dikonfigurasi untuk mengontrol domain mana saja yang diizinkan mengakses API.
5. **Variabel Lingkungan** — Data sensitif seperti API Key Gemini, Connection String MongoDB, dan JWT Secret disimpan dalam file `.env` yang tidak diikutsertakan dalam repositori Git (sudah tercantum di `.gitignore`).
6. **Validasi Input** — Backend melakukan validasi data input (format email, panjang kata sandi minimal 6 karakter, dll.) sebelum memprosesnya.

---

<p align="center">
  <strong>Halator AI</strong> — Memberdayakan Komunitas Muslim Global dengan Audit Kepatuhan Syariah Berbasis Kecerdasan Buatan
</p>

<p align="center">
  © 2026 Halator AI. Hak Cipta Dilindungi.
</p>
]]>
