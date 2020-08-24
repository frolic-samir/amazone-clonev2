import React, { useContext } from "react";
import "./header.css";
import logo from "../logo.png";
import { Link, useHistory } from "react-router-dom";
import { Store } from "./Provider";
import { auth } from "../firebase";

function Header() {
  const [state] = useContext(Store);

  const signout = () => {
    if (state.user) {
      auth.signOut();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light text-white">
      <div className="container-fluid">
        <Link className="link" to="/">
          <img className="header-img" src={logo} alt="amazon-logo" />
        </Link>
        <form className="d-flex col-md-6">
          <input
            className="form-control ml-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-warning" type="submit">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-search"
              fillRule="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
              />
              <path
                fillRule="evenodd"
                d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
              />
            </svg>
          </button>
        </form>
        <button
          className="navbar-toggler navbar-dark bg-dark"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <Link className="link" to={!state.user && "login"}>
              <li
                className="nav-item d-flex flex-column justify-content-center mx-2"
                onClick={signout}
              >
                <span className="op1">Hello, {state.user?.email}</span>
                <span className="op2">{state.user ? "SignOut" : "SignIn"}</span>
              </li>
            </Link>
            <Link className="link" to="/">
              <li className="nav-item d-flex flex-column justify-content-center mx-2">
                <span className="op1">Orders and</span>
                <span className="op2">Retails</span>
              </li>
            </Link>
            <Link className="link" to="/">
              <li className="nav-item d-flex flex-column justify-content-center mx-2">
                <span className="op1">Prime</span>
                <span className="op2">Vids</span>
              </li>
            </Link>
            <Link className="link" to="checkout">
              <li className="nav-item d-flex align-items-center mx-2 mt-2">
                <svg
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                  className="bi bi-cart3"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                  />
                </svg>
                <small className="item-count">{state.basket.length}</small>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
