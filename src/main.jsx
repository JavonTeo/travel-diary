import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// src
import App from "./components/home/App";
import Welcome from "./components/authentication/Welcome";
import LogIn from "./components/authentication/LogIn";
import SignUp from "./components/authentication/SignUp";
import PrivateRoute from "./components/authentication/PrivateRoute";
import { AuthProvider } from "./components/authentication/AuthContextProvider";

function Main() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <PrivateRoute>
              <App />
            </PrivateRoute>
          }
        />
        <Route exact path="/welcome" element={<Welcome />} />
        <Route exact path="/logIn" element={<LogIn />} />
        <Route exact path="/signUp" element={<SignUp />} />
      </Routes>
    </AuthProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>
);
