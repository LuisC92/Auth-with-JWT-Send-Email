import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

import CurrentUserContext from "../contexts/userContext"

import bookAPI from "../services/bookAPI"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { setUser } = useContext(CurrentUserContext)

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (email && password) {
      bookAPI
        .post("/api/auth/login", { email, password })
        .then((res) => {
          setUser(res.data)
          localStorage.setItem("user", JSON.stringify(res.data))
          navigate("/books")
        })
        .catch((err) => console.log(err))
    } else {
      alert("Please specify email and password")
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ width: "18rem" }}
      className="m-auto mt-5"
    >
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="form-control"
          id="email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control"
          id="password"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Enter
      </button>
    </form>
  )
}

export default Login
