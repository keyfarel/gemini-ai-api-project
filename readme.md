# 🎨 Server API Gemini Sederhana

Sebuah server backend yang dibuat dengan Node.js dan Express untuk menyediakan antarmuka (interface) ke Google Gemini API. Proyek ini memungkinkan interaksi dengan model Gemini untuk memproses berbagai jenis input seperti teks, gambar, dokumen, dan audio.

---

## ✨ Fitur

- **Generate Teks**: Menghasilkan konten teks berdasarkan prompt.
- **Analisis Gambar**: Menganalisis dan mendeskripsikan konten dari sebuah gambar.
- **Analisis Dokumen**: Menganalisis konten dari file dokumen.
- **Transkripsi Audio**: Mentranskripsi atau menganalisis konten dari file audio.

---

## 📂 Struktur Proyek

```plaintext
/
├── controllers/
├── middleware/
├── routes/
├── utils/
├── uploads/
├── .env
├── .env.example
├── .gitignore
├── index.js
├── package.json
└── README.md
```

---

## ⚙️ Instalasi & Pengaturan

### 1. Clone Repository

```bash
git clone https://github.com/keyfarel/gemini-ai-api-project.git
cd gemini-flash-api
```

### 2. Instal Dependensi

```bash
npm install
```

### 3. Setup Environment Variables

```bash
Salin file .env.example menjadi .env.
cp .env.example .env
```

Kemudian, buka file .env dan masukkan API Key Anda yang valid dari Google AI Studio.

---
## 🚀 Menjalankan Server
Untuk menjalankan server dalam mode development (otomatis restart saat ada perubahan):

```bash
node index.js
```

Server akan berjalan di http://localhost:3000 

## Endpoints API

Berikut adalah dokumentasi untuk setiap endpoint yang tersedia.
## Endpoints API

Berikut adalah dokumentasi untuk setiap endpoint yang tersedia.

| Endpoint & Method | Deskripsi | Detail Request | Contoh Response (200 OK) |
| :--- | :--- | :--- | :--- |
| **POST** <br> `/api/generate-text` | Menghasilkan teks dari sebuah prompt. | **Content-Type:** `application/json`<br><br>**Body:**<br><pre><code>{<br>  "prompt": "Fakta tentang komodo."<br>}</code></pre> | <pre><code>{<br>  "output": "Komodo adalah spesies kadal terbesar di dunia..."<br>}</code></pre> |
| **POST** <br> `/api/generate-from-image` | Menganalisis konten dari sebuah gambar. | **Content-Type:** `multipart/form-data`<br><br>**Form Fields:**<br>- `image` (File): Wajib.<br>- `prompt` (Text): Opsional. | <pre><code>{<br>  "output": "Gambar ini menunjukkan seekor kucing oranye..."<br>}</code></pre> |
| **POST** <br> `/api/generate-from-document` | Menganalisis konten dari sebuah file dokumen. | **Content-Type:** `multipart/form-data`<br><br>**Form Fields:**<br>- `document` (File): Wajib.<br>- `prompt` (Text): Opsional. | <pre><code>{<br>  "output": "Dokumen ini membahas tentang sejarah..."<br>}</code></pre> |
| **POST** <br> `/api/generate-from-audio` | Mentranskripsi atau menganalisis file audio. | **Content-Type:** `multipart/form-data`<br><br>**Form Fields:**<br>- `audio` (File): Wajib.<br>- `prompt` (Text): Opsional. | <pre><code>{<br>  "output": "Transkrip: Selamat pagi, rapat akan dimulai..."<br>}</code></pre> |