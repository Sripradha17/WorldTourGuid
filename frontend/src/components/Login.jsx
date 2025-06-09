// src/components/Login.jsx
import React, { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { saveUserToBackend } from "../utils/saveUser";
import "../styles/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState(null);

  const togglePassword = () => setShowPass(!showPass);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await saveUserToBackend(user);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="glass-box">
        <h2 className="text-center mb-4">World Tour Guide</h2>

        <p className="about-text text-center mb-4">
          Discover amazing places around the world. Your adventure begins here!
        </p>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleLogin}>
          <div className="form-group mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group mb-4 position-relative">
            <label>Password</label>
            <input
              type={showPass ? "text" : "password"}
              className="form-control"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div
              className="toggle-password"
              onClick={togglePassword}
              title={showPass ? "Hide" : "Show"}
            >
              {showPass ? "🙈" : "👁️"}
            </div>
          </div>

          <button className="btn btn-primary w-100 mb-3" type="submit">
            Log In
          </button>
        </form>

        <div className="text-center text-light small">
          Don’t have an account?{" "}
          <span className="switch-link" onClick={() => navigate("/signup")}>
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
