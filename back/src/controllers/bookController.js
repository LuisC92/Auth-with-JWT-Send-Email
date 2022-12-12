const bookDataAccess = require("../models/bookDataAccess")

exports.getAll = (req, res) => {
  bookDataAccess
    .findAll()
    .then((books) => res.send(books))
    .catch((err) => res.status(500).send(err))
}

exports.getOne = (req, res) => {
  const bookId = req.params.id

  bookDataAccess
    .findOne(bookId)
    .then((book) => {
      if (book.length === 0) {
        res.sendStatus(404)
      } else {
        res.send(book[0])
      }
    })
    .catch((err) => res.status(500).send(err))
}
