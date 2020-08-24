import React, { useState } from "react";
import "./login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // created a user logged in..redirect to homepage
        alert("Your accounted is created and now you are logged in.");
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login d-flex flex-column align-items-center">
      <div>
        <Link to="/" role="button">
          <img
            src="https://exposureskate.org/wp-content/uploads/2015/01/Amazon.png"
            alt="am-logo"
          />
        </Link>
      </div>
      <div className="w-25 p-3 login border">
        <h1 className="display-6 font-weight-normal mb-3">Sign in</h1>
        <label for="exampleFormControlInput1" class="form-label mb-1">
          Email address
        </label>
        <input
          type="email"
          class="form-control form-control-sm mb-2"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label for="inputPassword" class="form-label mb-1">
          Password
        </label>
        <input
          type="password"
          class="form-control form-control-sm"
          id="inputPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={login}
          className="btn btn-secondary btn-sm w-100 mt-3 mb-3"
        >
          Sign In
        </button>

        <small className="mt-3">
          Don't have account?{" "}
          <span
            className="text-decoration-underline"
            role="button"
            onClick={register}
          >
            Need an account?
          </span>
        </small>
      </div>
    </div>
  );
}

export default Login;
