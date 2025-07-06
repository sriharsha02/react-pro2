import React from "react";
import ReactDOM from "react-dom/client";

import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Auth/Signup";
import Home from "./Home/Home";
import Address from "./Address";
import UserProfile from "./UserProfile";
import Login from "./Auth/Login";
import Payment from "./Payment";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/create-account" Component={Signup}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/address" element={<Address />}></Route>
        <Route path="/profile" element={<UserProfile />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
