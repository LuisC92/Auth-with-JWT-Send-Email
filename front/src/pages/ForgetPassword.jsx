import { useState } from "react";

import api from "../services/api";

function ForgetPassword() {
  const [email, setEmail] = useState("");

  const handleForm = (e) => {
    localStorage.setItem("email", email);
    e.preventDefault();
    api
      .post("/api/password/reset-password", { email })
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form
      onSubmit={handleForm}
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
      <button type="submit" className="btn btn-primary">
        Send Email
      </button>
    </form>
  );
}

export default ForgetPassword;
