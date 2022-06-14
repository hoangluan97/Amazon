import React, { useRef, useEffect } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../feature/LoginSlice";
import { useDispatch } from "react-redux";
import {
  fetchCartProductsfromFirestore,
  updateCartProductstoFirestoreAfterLogin,
  clearCartLogout,
} from "./productsSlice";
import { selectAllCartProducts } from "./productsSlice";

function LoginPage() {
  const auth = getAuth();
  const cartProducts = useSelector(selectAllCartProducts);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const onClickLogin = (e) => {
    e.preventDefault();
    const email = formRef.current.email.value;
    const password = formRef.current.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        const user = auth.currentUser;
        dispatch(userLogin(user.displayName));
        dispatch(fetchCartProductsfromFirestore());
        navigate("/Amazon");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(updateCartProductstoFirestoreAfterLogin(cartProducts));
      } else {
        dispatch(clearCartLogout());
      }
    });
  }, []);

  return (
    <div className="Loginpage displayflex">
      <Link to={"/Amazon"}>
        <div className="Loginpage-imgcontainer">
          <i className="Loginpage-img"></i>
        </div>
      </Link>
      <div className="Loginpage-signin displayflex">
        <span>Sign-In</span>
        <form ref={formRef} action="" className="Loginpage-form displayflex">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
          <button onClick={(e) => onClickLogin(e)}>Sign-In</button>
        </form>
      </div>
      <div className="Loginpage-new displayflex">
        <div className="Loginpage-new-line"></div>
        <span>New to Amazon?</span>
        <div className="Loginpage-new-line"></div>
      </div>
      <Link className="Loginpage-signuplink" to={"/Signup"}>
        <button className="Loginpage-signupbutton">
          Create your Amazon account
        </button>
      </Link>
    </div>
  );
}

export default LoginPage;
