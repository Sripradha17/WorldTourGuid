// src/components/Signup.jsx
import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { saveUserToBackend } from "../utils/saveUser";
import "../styles/Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await saveUserToBackend(user, "user");

      alert("User created successfully!");
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="glass-box">
        <h2 className="text-center mb-4">🗺️ Join WorldTourGuide</h2>
        <p className="about-text text-center mb-4">
          Sign up to explore, share, and discover amazing destinations!
        </p>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSignup}>
          <div className="form-group mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="you@example.com"
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
              onClick={() => setShowPass(!showPass)}
              title={showPass ? "Hide" : "Show"}
            >
              {showPass ? "🙈" : "👁️"}
            </div>
          </div>

          <button className="btn btn-success w-100 mb-3" type="submit">
            Sign Up
          </button>
        </form>

        <div className="text-center text-light small">
          Already have an account?{" "}
          <span className="switch-link" onClick={() => navigate("/login")}>
            Log In
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
