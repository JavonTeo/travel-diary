import { signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// src
import { auth, googleProvider } from "../../config/firebase";
import "./AuthenticationSitesStyles.css";

function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const logIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log(`Current user:${email}`);
            navigate("/");
        } catch (err) {
            console.error(err);
        }
    };

    const logInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="d-flex flex-column justify-content-center align-content-center mx-auto col-2 auth-font" style={{ height: "100vh" }}>
            <h1>Log In</h1>
            <input className="my-1" placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)}/>
            <input className="my-1" placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
            <button className="my-1 btn btn-success rounded" onClick={logIn}>Log In</button>
            <button className="my-1 btn btn-success rounded" onClick={logInWithGoogle}>Log In with Google</button>
        </div>
    );
}

export default LogIn;