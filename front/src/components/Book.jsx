function Book({ book }) {
  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">{book.isbn}</p>
      </div>
    </div>
  )
}

export default Book
