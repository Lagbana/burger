// Import dependencies
const mysql = require("mysql2");

let connection;

// connection config for MYSQL database hosted on heroku
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL).promise();
} else {

// connection config for local MYSQL database
  connection = mysql
    .createConnection({
      host: "localhost",
      user: "root",
      password: "Jameslives@2091",
      database: "burgers_db",
    })
    .promise();
}
connection.connect();
module.exports = connection;
