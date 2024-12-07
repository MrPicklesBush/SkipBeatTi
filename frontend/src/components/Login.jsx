import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      const data = await response.json();
      
      if (response.ok) {
        // Redirect to home page
        console.log('Login successful:', data);
        navigate('/homepage');
      } else {
        // Handle login error
        console.error('Login failed:', data.error);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Email or username</label>
          <input
            type="text"
            name="email"
            placeholder="Email or username"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="login-button">
          Log In
        </button>

        <div className="forgot-password">
          <a href="/forgot-password">Forgot your password?</a>
        </div>

        <div className="signup-prompt">
          <span>Don't have an account? </span>
          <a href="/signup">Sign up for Spotify</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
