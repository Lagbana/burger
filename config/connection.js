const mysql = require("mysql2")

const defaultConfig = {
    host: 'localhost',
    user: 'root',
    password: 'Jameslives@2091',
    database: 'burgers_db'
}

module.exports = mysql.createConnection(defaultConfig).promise()