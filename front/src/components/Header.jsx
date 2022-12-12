import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"

import bookAPI from "../services/bookAPI"

import CurrentUserContext from "../contexts/userContext"

function Header() {
  const { user, setUser } = useContext(CurrentUserContext)

  const navigate = useNavigate()

  const handleDisconnection = () => {
    bookAPI
      .get("/api/auth/logout")
      .then(() => {
        localStorage.clear()
        setUser(undefined)
        navigate("/")
      })
      .catch((err) => console.error(err.message))
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {user ? (
                <>
                  <li className="nav-item">
                    <Link to="/books" className="nav-link">
                      Books
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button
                      onClick={handleDisconnection}
                      className="ml-auto btn btn-danger"
                    >
                      Disconnect
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/signUp" className="nav-link">
                      SignUp
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <nav></nav>
    </header>
  )
}

export default Header
