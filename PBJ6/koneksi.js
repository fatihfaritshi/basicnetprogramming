const mysql = require('mysql');

//Create the connection to the database
const connection = mysql.createConnection({
    host: 'localhost',   //your mysql host (e.g., localhost)
    user: 'root',       // your mysql username
    password: '',   //your mysql password
    database: 'pbj6'      // the database you want to connect to
});

//connect to mysql
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL!');
});

module.exports = connection;