// Menggunakan dynamic import untuk chalk
(async () => {
    const chalk = (await import('chalk')).default;
  
    // Mencetak teks dengan chalk
    console.log(chalk.green('print warna biru sukses'));
  })();