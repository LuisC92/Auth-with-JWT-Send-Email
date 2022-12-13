import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../services/api";

function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();

    api
      .post("/api/user", { email, name, password })
      .then((res) => navigate("/login"))
      .catch((err) => {
        setError(err.response.data);
        console.log(err);
      });
  };

  return (
    <form
      onSubmit={handleForm}
      style={{ width: "18rem" }}
      className="m-auto mt-5"
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="name"
          className="form-control"
          id="name"
        />
      </div>
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
      {error ? <p style={{color: "red"}}>{error}</p> : null}
      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  );
}

export default SignUp;
