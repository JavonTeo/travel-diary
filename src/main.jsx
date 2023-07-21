import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes, redirect } from "react-router-dom";

import App from "./App";
import Auth from "./components/auth/Auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Main() {
  const [user, setUser] = useState(null);
  console.log(user);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => setUser(user));
    return () => unsubscribe();
  }, []);

  return (
      <Routes>
        <Route path="/" element={user ? <App /> : <Navigate to="/auth"/>} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <BrowserRouter>
//     <Main />
//   </BrowserRouter>
// );
root.render(<App />);