import React, { useContext } from "react";
import { Navigate, Route } from "react-router-dom";

// src
import { AuthContext } from "./AuthContextProvider";

function PrivateRoute({ children }) {
  const { currentUser } = useContext(AuthContext);
  return currentUser
    ? children
    : <Navigate to="/welcome" />;
}

export default PrivateRoute;
