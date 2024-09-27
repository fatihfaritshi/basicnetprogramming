const fs = require('fs');
const chalk = require('chalk');

// Fungsi untuk mengambil catatan (contoh)
const ambilCatatan = function () {
    return 'Ini Catatan Fatih Faritshi...';
}

// Fungsi untuk menambah catatan
const tambahCatatan = function (judul, isi) {
    const catatan = muatCatatan(); // Muat catatan yang ada
    const catatanGanda = catatan.filter(function (note) {
        return note.judul === judul; // Periksa apakah judul sudah ada
    });

    if (catatanGanda.length === 0) {
        catatan.push({ judul: judul, isi: isi }); // Tambahkan catatan baru
        simpanCatatan(catatan); // Simpan catatan
        console.log('Catatan baru ditambahkan!');
    } else {
        console.log('Judul catatan telah dipakai');
    }
}

const hapusCatatan = function (judul) {
    const catatan = muatCatatan()
    const catatanUntukDisimpan = catatan.filter(function (note) {
        return note.judul !== judul
    })
    if (catatan.length > catatanUntukDisimpan.length) {
        console.log(chalk.green.inverse('Catatan dihapus!'))
        simpanCatatan(catatanUntukDisimpan)
    } else {
        console.log(chalk.red.inverse('Catatan tidak ditemukan!'))
    }
}

// Fungsi untuk menyimpan catatan ke file
const simpanCatatan = function (catatan) {
    const dataJSON = JSON.stringify(catatan, null, 2); // Format JSON dengan indentasi
    fs.writeFileSync('catatan.json', dataJSON); // Simpan ke file
}

// Fungsi untuk memuat catatan dari file
const muatCatatan = function () {
    try {
        const dataBuffer = fs.readFileSync('catatan.json'); // Baca file
        const dataJSON = dataBuffer.toString(); // Ubah buffer ke string
        return JSON.parse(dataJSON); // Parsing JSON
    } catch (e) {
        return []; // Jika file tidak ada, kembalikan array kosong
    }
}

// Fungsi untuk menampilkan semua catatan
const tampilkanSemuaCatatan = function () {
    const catatan = muatCatatan();
    console.log(chalk.blue.bold('Daftar Catatan:'));
    catatan.forEach(function (note) {
        console.log(`${note.judul}: ${note.isi}`);
    });
};

// Fungsi untuk membaca catatan berdasarkan judul
const readCatatan = function (judul) {
    const catatan = muatCatatan();
    const catatanDitemukan = catatan.find(function (note) {
        return note.judul === judul;
    });

    if (catatanDitemukan) {
        console.log(chalk.green.bold('Catatan Ditemukan:'));
        console.log(`Judul: ${catatanDitemukan.judul}`);
        console.log(`Isi: ${catatanDitemukan.isi}`);
    } else {
        console.log(chalk.red.inverse('Catatan tidak ditemukan!'));
    }
};

// Ekspor fungsi-fungsi yang diperlukan
module.exports = {
    ambilCatatan: ambilCatatan,
    tambahCatatan: tambahCatatan,
    hapusCatatan: hapusCatatan,
    tampilkanSemuaCatatan: tampilkanSemuaCatatan, 
    readCatatan: readCatatan
};
