const db = require("./db")

exports.change = (newPassword, userId)=>{
    return db
    .promise()
    .query("UPDATE user SET password = ? WHERE id = ?", [newPassword,userId])
    .then(([result]) => result)
}