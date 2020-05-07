const connection = require("./connection")

const orm = {
    selectAll: async function (tableName, orderColumn) {
        const sql = 'SELECT * FROM ?? ORDER BY ?? ASC'
        const [rows] = await connection.query(sql, [tableName, orderColumn])
        return rows
    },
    // result.insertId, 
    insertOne: async function (tableName, colOne, colTwo, valOfColOne, valOfColTwo) {
        const sql = `INSERT INTO ?? (??, ??) VALUES (?, ?)`
        const [result] = await connection.query(sql, [
            tableName,
            colOne,
            colTwo,
            valOfColOne,
            valOfColTwo
        ])
        return result
    },
    // result.affectedRows
    updateOne: async function (tableName, updateCol, updateVal, searchCol, searchVal) {
        const sql = `UPDATE ?? SET ?? = ? WHERE ?? = ?;`
        const [result] = await connection.query(sql, [
            tableName, 
            updateCol, 
            updateVal, 
            searchCol, 
            searchVal
        ])
        return result
    }
}

module.exports = orm