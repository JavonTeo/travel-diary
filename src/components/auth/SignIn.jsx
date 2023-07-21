import { auth, googleProvider } from "../../config/firebase";
import { signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log(auth?.currentUser?.email)

    const signIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("done");
        } catch (err) {
            console.error(err);
        }
    };

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.error(err);
        }
    };

    const logOut = async () => {
        try {
            await signOut(auth);
            console.log("logged out");
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="d-flex flex-column">
            <input className="my-1" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <input className="my-1" placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
            <button className="my-1" onClick={signIn}>Sign In</button>
            <button className="my-1" onClick={signInWithGoogle}>Sign In with Google</button>
            <button className="my-1" onClick={logOut}>Log Out</button>
        </div>
    );
}

export default SignIn;