import { React, useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Link, Route, Routes } from "react-router-dom";

function Auth() {
    const [chose, setChose] = useState(false);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh" }}>
            <h1>please sign in</h1>
            <div className={chose ? "visually-hidden": ""}>
                {/* <button onClick={() => {
                    setChose(true);
                    setChooseSignIn(true);}}>Sign In</button> */}
                <Link to="/signIn"><button onClick={() => setChose(true)}>Sign In</button></Link>
                <Link to="/signUp"><button onClick={() => setChose(true)}>Create an Account</button></Link>
                {/* <button onClick={() => {
                    setChose(true);
                    setChooseSignUp(true);}}>Create an Account</button> */}
            </div>
            <Routes>
                <Route path="/signIn" element={<SignIn />}/>
                <Route path="/signUp" element={<SignUp />}/>
            </Routes>
        </div>
    )
}

export default Auth;