import React, { useRef } from "react";
import "./SignupPage.css";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { userLogin } from "../feature/LoginSlice";
import db from "../firebaseConfig";

function SignupPage() {
  const auth = getAuth();
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const formRef = useRef(null);

  const onClickSignup = (e) => {
    e.preventDefault();
    const email = formRef.current.email.value;
    const password = formRef.current.password.value;
    const name = formRef.current.name.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        formRef.current.reset();
        signInWithEmailAndPassword(auth, email, password).then(() => {
          const user = auth.currentUser;
          setDoc(doc(db, "users", cred.user.uid), { cartproducts: [] });
          updateProfile(user, {
            displayName: name,
          }).then(() => {
            dispatch(userLogin(name));
          });
          navigation("/Amazon");
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="Signuppage displayflex">
      <Link to={"/Amazon"}>
        <div className="Signuppage-imgcontainer">
          <i className="Signuppage-img"></i>
        </div>
      </Link>
      <div className="Signuppage-signin displayflex">
        <span>Create account</span>
        <form ref={formRef} action="" className="Signuppage-form displayflex">
          <label htmlFor="text">Your name</label>
          <input type="text" name="name" required />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
          <button onClick={(e) => onClickSignup(e)}>Create account</button>
        </form>
        <div className="Signuppage-login displayflex">
          <span>
            Already have an account? <Link to={"/Login"}>Sign-In</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
