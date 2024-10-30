'use strict';

var connection = require('../koneksi');

// showAllUser - Menampilkan semua data mahasiswa
exports.showAllUser = function (req, res) {
    connection.query('SELECT * FROM biodata', function (error, rows) {
        if (error) {
            console.log(error);
            return res.status(500).send(error);
        } else {
            res.send(rows);
        }
    });
};

// showBiodataById - Menampilkan biodata berdasarkan ID
exports.showBiodataById = function (req, res) {
    let userId = req.params.id;
    connection.query('SELECT * FROM biodata WHERE id = ?', [userId], function (error, row) {
        if (error) {
            console.error('Error fetching data by ID:', error);
            return res.status(500).send({ error: 'Error fetching data by ID' });
        }
        if (row.length > 0) {
            res.json(row[0]);  // Menampilkan biodata berdasarkan ID
        } else {
            res.status(404).send({ message: 'Biodata not found' });
        }
    });
};

// addNewBiodata - Menambahkan biodata baru
exports.addNewbiodata = function (req, res) {
    // Ambil data dari body permintaan
    let newBiodata = {
        NAMA: req.body.nama,
        NIM: req.body.nim,
        PROVINSI: req.body.provinsi,
    };

    // Validasi input untuk memastikan semua field terisi
    if (!newBiodata.NAMA || !newBiodata.NIM || !newBiodata.PROVINSI) {
        return res.status(400).send({ error: 'Semua field harus diisi' });
    }

    // Menyimpan biodata ke database
    connection.query('INSERT INTO biodata SET ?', newBiodata, function (error, result) {
        if (error) {
            console.error('Error adding data:', error);
            return res.status(500).send({ error: 'Error adding data' });
        }
        res.status(201).send({ message: 'Biodata added successfully', id: result.insertId });
    });
};

// updateBiodataById - Mengubah biodata berdasarkan ID
exports.updatebiodataById = function (req, res) {
    let userId = req.params.id;
    let updatedBiodata = {
        NAMA: req.body.nama, 
        NIM: req.body.nim,
        PROVINSI: req.body.provinsi,
    };

    connection.query('UPDATE biodata SET ? WHERE id = ?', [updatedBiodata, userId], function (error, result) {
        if (error) {
            console.error('Error updating data:', error);
            return res.status(500).send({ error: 'Error updating data' });
        }
        if (result.affectedRows > 0) {
            res.send({ message: 'Biodata updated successfully' });
        } else {
            res.status(404).send({ message: 'Biodata not found' });
        }
    });
};

// deleteBiodataById - Menghapus biodata berdasarkan ID
exports.deletebiodataById = function (req, res) {
    let userId = req.params.id;
    connection.query('DELETE FROM biodata WHERE id = ?', [userId], function (error, result) {
        if (error) {
            console.error('Error deleting data:', error);
            return res.status(500).send({ error: 'Error deleting data' });
        }
        if (result.affectedRows > 0) {
            res.send({ message: 'Biodata deleted successfully' });
        } else {
            res.status(404).send({ message: 'Biodata not found' });
        }
    });
};