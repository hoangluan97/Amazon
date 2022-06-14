import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Home from "./feature/Home";
import ProductPage from "./feature/ProductPage";
import CartPage from "./feature/CartPage";
import LoginPage from "./feature/LoginPage";
import SignupPage from "./feature/SignupPage";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from "react-redux";
import store from "./app/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/Amazon" element={<App />}>
            <Route index element={<Home />} />
            <Route path="Home" element={<Home />} />
            <Route path=":ProductPageid" element={<ProductPage />} />
            <Route path="Cart" element={<CartPage />} />
          </Route>
          <Route path="/Login" element={<LoginPage />}></Route>
          <Route path="/Signup" element={<SignupPage />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
