import { useState } from "react"
import { useNavigate } from "react-router-dom"

import api from "../services/api"

function ChangePassword() {

  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")
  const [error, setError] = useState();


  const navigate = useNavigate()

  const handleForm = (e) => {
    e.preventDefault()
    const email = localStorage.getItem("email")
    
    if(password === repeatPassword) {
      localStorage.clear("email")
      api
        .post("/api/password/forget-password", { password, email })
        .then((res) => {
          navigate("/login")
        })
        .catch((err) => {
          setError(err.response.data)
          console.error(err)})
    } else {
      setError("Please verify your passwords")
    }
  }

  return (
    <form
      onSubmit={handleForm}
      style={{ width: "18rem" }}
      className="m-auto mt-5"
    >
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
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Repeat Your Password
        </label>
        <input
          onChange={(e) => setRepeatPassword(e.target.value)}
          type="password"
          className="form-control"
          id="currentPassword"
        />
      </div>
      {error ? <p style={{color: "red"}}>{error}</p>:null}
      <button type="submit" className="btn btn-primary">
        Change
      </button>
    </form>
  )
}

export default ChangePassword
