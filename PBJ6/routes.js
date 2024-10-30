'use strict';

module.exports = function (app) {
  // Import user controller
  var routeuser = require('./controller/usercontroller');

  // Route untuk menampilkan semua user
  app.route('/user').get(routeuser.showAllUser);

  // Route untuk menampilkan user berdasarkan ID
  app.route('/user/:id').get(routeuser.showBiodataById);

  // Route untuk menambahkan user baru
  app.route('/user/add').post(routeuser.addNewbiodata);

  // Route untuk mengupdate user berdasarkan ID
  app.route('/user/update/:id').put(routeuser.updatebiodataById);

// Route untuk menghapus user berdasarkan ID
app.route('/user/delete/:id').delete(routeuser.deletebiodataById);

};