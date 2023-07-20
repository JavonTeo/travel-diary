import { auth, googleProvider } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { React, useState } from "react";

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCredential);
        } catch (err) {
            console.error(err);
        }
    };

    // return (
    //     <div className="sign-in-container">
    //         <form onSubmit={signUp}>
    //         <h1>Create Account</h1>
    //         <input
    //         type="email"
    //         placeholder="Enter your email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         ></input>
    //         <input
    //         type="password"
    //         placeholder="Enter your password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //         ></input>
    //         <button type="submit">Sign Up</button>
    //         </form>
    //     </div>
    // )
    return (
        <h1>SIGN UP</h1>
    );
}

export default SignUp;