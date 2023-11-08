import React from "react";
import { useNavigate } from "react-router-dom";
import "./Rstyle.css";
import formimage from "./images/a.jpg";
import { useState, useContext } from "react";

import Usercontex from "../Contex/Createcontex";

function Registration() {
  const Navigate = useNavigate();

  const initialFormData = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const { userData, setUserData } = useContext(Usercontex);
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
      userName: formData.userName,
      password: formData.password,
      email: formData.email,
    });
    setUserData(userData.slice());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (formData.firstName === "") {
      newErrors.firstName = "First Name is required";
    }
    if (formData.lastName === "") {
      newErrors.lastName = "Last Name is required";
    }
    if (formData.userName === "") {
      newErrors.userName = "User Name is required";
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
      Navigate("/login");

      console.log(userData);
    }
  };

  return (
    <div className="wrapper ">
      <div className="inner">
        <div className="image-holder">
          <img src={formimage} alt="" />
        </div>
        <form onSubmit={handleSubmit}>
          <h3>Registration Form</h3>
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="form-control"
            />
            <div className="error">{errors.firstName}</div>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="form-control"
            />
            <div className="error">{errors.lastName}</div>
          </div>
          <div className="form-wrapper">
            <input
              type="text"
              name="userName"
              placeholder="Username"
              value={formData.userName}
              onChange={handleChange}
              className="form-control"
            />
            <i className="zmdi zmdi-account"></i>
            <div className="error">{errors.userName}</div>
          </div>
          <div className="form-wrapper">
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
            />
            <i className="zmdi zmdi-email"></i>
            <div className="error">{errors.email}</div>
          </div>

          <div className="form-wrapper">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
            />
            <i className="zmdi zmdi-lock"></i>
            <div className="error">{errors.password}</div>
          </div>
          <div className="form-wrapper">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="form-control"
            />
            <i className="zmdi zmdi-lock"></i>
            <div className="error">{errors.confirmPassword}</div>
          </div>
          <button type="submit">
            Register <i className="zmdi zmdi-arrow-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
