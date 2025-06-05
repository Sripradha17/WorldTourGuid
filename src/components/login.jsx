import React, { useState } from "react";
import "../styles/login.css";  // Import the custom CSS file

const LoginForm = ({ isLogin, toggleMode, onSubmit, error }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2 className="login-title">{isLogin ? "Welcome Back!" : "Create Your Account"}</h2>

        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="Email address"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="username"
          />
          <input
            type="password"
            placeholder="Password (min 6 characters)"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete={isLogin ? "current-password" : "new-password"}
            minLength={6}
          />
          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="login-button">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="login-toggle" onClick={toggleMode}>
          {isLogin
            ? "Don't have an account? Sign up"
            : "Already have an account? Login"}
        </p>

        <p className="login-footer">&copy; 2025 YourApp. All rights reserved.</p>
      </div>
    </div>
  );
};

export default LoginForm;
