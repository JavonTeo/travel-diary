import { React, useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Auth() {
    const [chose, setChose] = useState(false);
    const [chooseSignIn, setChooseSignIn ] = useState(false);
    const [chooseSignUp, setChooseSignUp ] = useState(false);

    return (
        <div>
            <h1>please sign in</h1>
            <div className={chose ? "visually-hidden": ""}>
                <button onClick={() => {
                    setChose(true);
                    setChooseSignIn(true);}}>Sign In</button>
                <button onClick={() => {
                    setChose(true);
                    setChooseSignUp(true);}}>Create an Account</button>
            </div>
            { chooseSignIn ? <SignIn /> : ""}
            { chooseSignUp ? <SignUp /> : ""}
        </div>
    )
}

export default Auth;