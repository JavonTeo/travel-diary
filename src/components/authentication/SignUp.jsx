import { createUserWithEmailAndPassword } from "firebase/auth";
import { React, useState } from "react";

// src
import { auth } from "../../config/firebase";
import "./AuthenticationSitesStyles.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      className="d-flex flex-column justify-content-center align-content-center mx-auto col-2 auth-font"
      style={{ height: "100vh" }}
      onSubmit={signUp}
    >
      <h1>Create Account</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="my-1"
      ></input>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="my-1"
      ></input>
      <button className="my-1 btn btn-success rounded" type="submit">
        Sign Up
      </button>
    </form>
  );
}

export default SignUp;
