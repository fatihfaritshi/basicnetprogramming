const path = require('path');
const express = require('express');
const hbs = require('hbs');
const app = express();
const port = 5000;

// Mendefinisikan jalur/path untuk konfigurasi Express
const direktoriPublic = path.join(__dirname, '../public');
const direktoriViews = path.join(__dirname, '../templates/views');
const direktoriPartials = path.join(__dirname, '../templates/partials');

// Setup handlebars engine dan lokasi folder views
app.set('view engine', 'hbs');
app.set('views', direktoriViews);
hbs.registerPartials(direktoriPartials);

// Setup direktori statis
app.use(express.static(direktoriPublic));

// Halaman utama
app.get('/', (req, res) => {
    res.render('index', {
        judul: 'Aplikasi Cek Cuaca',
        nama: 'Muhammad Fatieh Akram Faritshi'
    });
});

// Halaman tentang
app.get('/tentang', (req, res) => {
    res.render('tentang', {
        judul: 'Tentang Saya',
        nama: 'Muhammad Fatieh Akram Faritshi'
    });
});

// Halaman bantuan/FAQ
app.get('/bantuan', (req, res) => {
    res.render('bantuan', {
        judul: 'Ini Halaman Bantuan',
        nama: 'Muhammad Fatieh Akram Faritshi',
        teksBantuan: 'ini adalah teks bantuan'
    });
});

// Halaman infoCuaca
app.get('/infoCuaca', (req, res) => {
    res.send([{
        prediksiCuaca: 'cuaca berpotensi hujan',
        lokasi: 'Padang'
    }]);
});

app.get('/bantuan/*', (req, res) => {
    res.render('404', {
        judul: '404',
        nama: 'Muhammad Fatieh Akram Faritshi',
        pesanKesalahan: 'Artikel yang dicari tidak ditemukan.'
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        judul: '404',
        nama: 'Muhammad Fatieh Akram Faritshi',
        pesanKesalahan: 'Halaman tidak ditemukan.'
    });
});

// Menjalankan server di port 5000
app.listen(5000, () => {
    console.log('Server berjalan pada port 5000.');
});
