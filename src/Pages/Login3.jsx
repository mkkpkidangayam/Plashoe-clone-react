import React from "react";
import { useState, useContext } from "react";
import Usercontex from "../Contex/Createcontex";
import { Link, useNavigate } from "react-router-dom";
import "./Lstyle.css";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

function Login() {
  const Navigate = useNavigate();
  const { userData } = useContext(Usercontex);
  const { log, setLog } = useContext(Usercontex);

  console.log(userData);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please fill in both username and password fields.");
      return;
    }

    // Check if the entered username and password match any userdetails
    const user = userData.find(
      (user) => user.userName === username && user.password === password
    );

    if (user) {
      alert("Login successful");
      setLog(user.userName);

      Navigate("/");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="logdiv">
      <form className="Logform" onSubmit={handleSubmit}>
        <h1 className="Logheadline">Log in</h1>
        <input
          className="inpusty"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="inpusty"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="inputBtn" type="submit">
          Next
        </button>
        <Link className="create text-dark" to="/registration">
          <strong>Create a New Account?</strong>
        </Link>
      </form>

      <a className="bg-secondary" onClick={() => Navigate("/adminLog")}>
        <AccountBoxIcon />
      </a>
    </div>
  );
}

export default Login;
