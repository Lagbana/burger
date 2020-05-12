// Import dependencies
const connection = require("./connection");

const orm = {
  /*
   *Function selectAll: selects all from a table and order by a column
   */
  selectAll: async function (tableName, orderColumn) {
    const sql = "SELECT * FROM ?? ORDER BY ?? ASC";
    const [rows] = await connection.query(sql, [tableName, orderColumn]);
    return rows;
  },
  /*
   *Function insertOne: add a new entry into the database
   */
  insertOne: async function (
    tableName,
    colOne,
    colTwo,
    valOfColOne,
    valOfColTwo
  ) {
    const sql = `INSERT INTO ?? (??, ??) VALUES (?, ?)`;
    const [result] = await connection.query(sql, [
      tableName,
      colOne,
      colTwo,
      valOfColOne,
      valOfColTwo,
    ]);
    return result;
  },
  /*
        *Function updateOne: update an existing entry in the database
  */
  updateOne: async function (tableName, colToUpdate, searchCol, searchVal) {
    const sql = `UPDATE ?? SET ? WHERE ?? = ?;`;
    const [result] = await connection.query(sql, [
      tableName,
      colToUpdate,
      searchCol,
      searchVal,
    ]);
    return result;
  },
};

module.exports = orm;
