const connection = require("./connection")

const orm = {
    selectAll: async function (tableName, orderColumn) {
        const sql = 'SELECT * FROM ?? ORDER BY ?? ASC'
        const [rows] = await connection.query(sql, [tableName, orderColumn])
        return rows
    },
   
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
    
    updateOne: async function (tableName, colOne, valueOne, colTwo, valueTwo, searchCol, searchVal) {
        const sql = `UPDATE ?? SET ?? = ?, ?? = ? WHERE ?? = ?;`
        const [result] = await connection.query(sql, [
            tableName, 
            colOne, 
            valueOne,
            colTwo,
            valueTwo, 
            searchCol, 
            searchVal
        ])
        return result
    }
}

module.exports = orm