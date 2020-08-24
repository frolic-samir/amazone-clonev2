import React, { useContext, useEffect } from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { auth } from "./firebase";
import { Store } from "./components/Provider";

function App() {
  const [state, dispatch] = useContext(Store);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
