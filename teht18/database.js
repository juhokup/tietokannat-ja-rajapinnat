const mysql = require('mysql2');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'JK',
  password: 'qwerty1234',
  database: 'opintorekisteri_vk7'
});
module.exports = connection;