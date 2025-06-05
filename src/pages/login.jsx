// pages/Login.jsx
import React, { useState, useEffect } from "react";
import { auth } from "../firebase/config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/Login";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/dashboard");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleSubmit = async (email, password) => {
    setError("");
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      // onAuthStateChanged will redirect automatically
    } catch (err) {
      setError(err.message);
    }
  };

  const toggleMode = () => {
    setIsLogin((prev) => !prev);
    setError("");
  };

  return (
    <LoginForm
      onSubmit={handleSubmit}
      isLogin={isLogin}
      toggleMode={toggleMode}
      error={error}
    />
  );
};

export default Login;
