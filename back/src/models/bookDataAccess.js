const db = require("./db")

exports.findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM `book`")
    .then((result) => result[0])
}

exports.findOne = (bookId) => {
  return db
    .promise()
    .query("SELECT * FROM `book` WHERE ID = ?", [bookId])
    .then(([result]) => result)
}
