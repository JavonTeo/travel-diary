import { React, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

/**
 * Attribute: https://www.flaticon.com/free-animated-icons/writing for notebook gif
 */

function Welcome() {

    return (
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh" }}>
            <img className="my-1" src="src\assets\notebook.gif" style={{ width: "80px", height: "auto" }}/>
            <p>Welcome to Travel Diary</p>
            <p>Log in with your account to continue</p>
            <div>
                <Link to="/logIn"><button className="mx-1 btn btn-success rounded">Log In</button></Link>
                <Link to="/signUp"><button className="mx-1 btn btn-success rounded">Create new account</button></Link>
            </div>
        </div>
    )
}

export default Welcome;