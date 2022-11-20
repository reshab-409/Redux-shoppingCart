import "./App.css";
import React from "react";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  // console.log(isLoggedIn);
  const cartItems = useSelector((state) => state.cart.itemsList);
  console.log(cartItems);

  const loggedIn = window.localStorage.getItem("isLoggedIn");
  console.log(loggedIn, "login");
  const loginData = window.localStorage.getItem("userData");
  console.log(loginData, "userData")
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={loggedIn?<Layout />:<Auth />} />
          <Route path="/Layout" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
