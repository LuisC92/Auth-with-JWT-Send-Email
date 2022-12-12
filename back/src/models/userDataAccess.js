const db = require("./db")

exports.findOne = (userId) => {
  return db
    .promise()
    .query("SELECT * FROM `user` WHERE ID = ?", [userId])
    .then(([result]) => result)
}

exports.findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM `user`")
    .then((result) => result[0])
}

exports.addOne = (user) => {
  const { name, email, hash } = user

  return db
    .promise()
    .query("INSERT INTO `user` (name, email, password) VALUES (?, ?, ?)", [
      name,
      email,
      hash,
    ])
    .then(([result]) => {
      return { id: result.insertId, email }
    })
}

exports.findByEmail = (email) => {
  return db
    .promise()
    .query("SELECT id, name, email, password from `user` WHERE email = ?", [
      email,
    ])
    .then(([result]) => result[0])
}
