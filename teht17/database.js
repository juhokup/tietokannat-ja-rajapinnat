const mysql = require('mysql2');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'JK',
  password: 'qwerty1234',
  database: 'kirjasto_vk7'
});
module.exports = connection;