// const fs = require('fs') 
// fs.writeFileSync('catatan.txt', 'Nama Saya Fatih Faritshi') 
// //fs.appendFileSync('catatan.txt', ' Saya tinggal di Padang') 

// const catatan = require('./catatan.js')
// const pesan1 = catatan()
// console.log(pesan1)

// const validator = require('validator') 
// const pesan2 = ambilCatatan() 
// console.log(pesan2) 
// console.log(validator.isURL('https://proska.com')) 

// const chalk = require('chalk');

// // Mencetak teks dengan warna biru
// console.log(chalk.blue('print warna biru sukses'));
// console.log(chalk.red('print warna merah sukses'));
// console.log(chalk.bgYellow.black('print dengan latar belakang kuning dan teks hitam'));
// console.log(chalk.green.bold('print warna hijau dengan teks tebal'));
// console.log(chalk.cyan.underline('print warna cyan dengan garis bawah'));

// const ambilCatatan = require('./catatan.js') 

// const command = process.argv[5]
// console.log(process.argv[2])

// if (command === 'tambah') {
//     console.log('Tambah Catatan')
// } else if (command === 'hapus') {
//     console.log('Hapus Catatan')
// }

const catatan = require('./catatan.js');

const yargs = require('yargs');
// const catatan = require('./catatan.js')
// Kustomisasi versi yargs
yargs.version('10.1.0')

// Membuat perintah (command) 'tambah'
yargs.command({
    command: 'tambah',
    describe: 'tambah sebuah catatan baru',
    builder: {
        judul: {
            describe: 'Judul catatan',
            demandOption: true,
            type: 'string'
        },
        isi: {
            describe: 'Isi catatan',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        catatan.tambahCatatan(argv.judul, argv.isi)
        }
})

// Perintah hapus
yargs.command({
    command: 'hapus',
    describe: 'hapus catatan',
    builder: {
        judul: {
            describe: 'Judul catatan yang ingin dihapus',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        catatan.hapusCatatan(argv.judul); // Pastikan ada fungsi hapusCatatan di catatan.js
    }
})

// Instruksi no.4 letakan disini
yargs.command({
    command: 'tampilkan',
    describe: 'menampilkan semua catatan',
    handler: function () {
        console.log('Menampilkan semua catatan...');
        // Tambahkan logika untuk mengambil dan menampilkan semua catatan dari catatan.js
    }
});



// Perintah untuk menampilkan semua catatan
yargs.command({
    command: 'tampilkan',
    describe: 'menampilkan semua catatan',
    handler: function () {
        catatan.tampilkanSemuaCatatan();
    }
});

// Perintah untuk membaca sebuah catatan
yargs.command({
    command: 'read',
    describe: 'membaca sebuah catatan',
    builder: {
        judul: {
            describe: 'Judul catatan yang ingin dibaca',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        catatan.readCatatan(argv.judul);
    }
});

// letakan bagian ini pada baris terakhir
yargs.parse()