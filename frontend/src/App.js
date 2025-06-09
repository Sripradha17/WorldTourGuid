// src/App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";

import { onAuthStateChanged } from "firebase/auth";
import { saveUserToBackend } from "./utils/saveUser";
import { auth } from "./firebase";



function App() {

  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (user) => {
    if (user) {
      await saveUserToBackend(user);
    }
  });
  return () => unsubscribe();
}, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<h2 className="text-center mt-5">Welcome to WorldTourGuide</h2>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
