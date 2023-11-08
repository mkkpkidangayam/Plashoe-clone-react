import React, { useContext, useState } from "react";
import "./Registration.css";
import { Link, useNavigate } from "react-router-dom";
import dataHandling from "../UserContext/UserContext";

function Registration() {
  const navigate = useNavigate();

  const initialFormData = {
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const { userData, setUserData } = useContext(dataHandling);
  // Initialize userData as an empty array if it's undefined
  if (!userData) {
    setUserData([]);
  }

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const userHandler = () => {
    userData.push({
      name: formData.name,
      username: formData.username,
      password: formData.password,
      email: formData.email,
    });
    setUserData(userData.slice());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (formData.name === "") {
      newErrors.name = "Name is required";
    }
    if (formData.username === "") {
      newErrors.name = "User Name is required";
    }
    if (formData.email === "") {
      newErrors.email = "Email is required";
    }
    if (formData.password === "") {
      newErrors.password = "Password is required";
    }
    if (formData.confirmPassword === "") {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form data:", formData);
      userHandler();
      navigate("/login");

      console.log(userData);
    }
  };
  return (
    <div className="registration-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <div style={{ color: "red" }}>{errors.name}</div>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <div style={{ color: "red" }}>{errors.username}</div>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
        <div style={{ color: "red" }}>{errors.email}</div>

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="form-control"
        />

        <div style={{ color: "red" }}>{errors.password}</div>

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="form-control"
        />
        <div style={{ color: "red" }}>{errors.confirmPassword}</div>

        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account?
        <Link to="/login"> Login</Link>
      </p>
    </div>
  );
}

export default Registration;
