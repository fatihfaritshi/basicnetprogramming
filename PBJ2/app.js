const fs = require('fs') 
fs.writeFileSync('catatan.txt', 'Nama Saya Fatih Faritshi') 
//fs.appendFileSync('catatan.txt', ' Saya tinggal di Padang') 

const catatan = require('./catatan.js')
const pesan1 = catatan()
console.log(pesan1)

const validator = require('validator') 
const ambilCatatan = require('./catatan.js') 
const pesan2 = ambilCatatan() 
console.log(pesan2) 
console.log(validator.isURL('https://proska.com')) 

const chalk = require('chalk');

// Mencetak teks dengan warna biru
console.log(chalk.blue('print warna biru sukses'));
console.log(chalk.red('print warna merah sukses'));
console.log(chalk.bgYellow.black('print dengan latar belakang kuning dan teks hitam'));
console.log(chalk.green.bold('print warna hijau dengan teks tebal'));
console.log(chalk.cyan.underline('print warna cyan dengan garis bawah'));