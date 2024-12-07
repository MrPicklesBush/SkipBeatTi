import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      "FormData being sent: " +
        formData.first_name +
        " " +
        formData.last_name +
        " " +
        formData.email +
        " " +
        formData.password
    );

    try {
      console.log("called server for SignUp ");
      const response = await fetch("/add_user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Redirect to login
        console.log("SignUp successful:", data);
        navigate("/login");
      } else {
        // Handle login error
        console.error("SignUp failed:", data.error);
      }
    } catch (error) {
      console.error("SignUp error:", error);
    }
  };

  return (
    <div className="login-container">
      <h1>Sign up to start listening</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>First name</label>
          <input
            type="text"
            name="first_name"
            placeholder="Enter your first name"
            value={formData.first_name}
            onChange={handleChange}
            className="signup-input"
          />
        </div>

        <div className="input-group">
          <label>Last name</label>
          <input
            type="text"
            name="last_name"
            placeholder="Enter your last name"
            value={formData.last_name}
            onChange={handleChange}
            className="signup-input"
          />
        </div>

        <div className="input-group">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            placeholder="name@domain.com"
            value={formData.email}
            onChange={handleChange}
            className="signup-input"
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

        <button type="submit" className="signup-button">
          SignUp
        </button>
      </form>
    </div>
  );
};

export default SignUp;
