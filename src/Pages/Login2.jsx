import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import dataHandling from "../UserContext/UserContext";
import { Button } from "react-bootstrap";

function Login() {
  const Navigate = useNavigate();
  const { userData, username, setUsername } = useContext(dataHandling);
  const { log, setLog } = useContext(dataHandling);
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please fill in both username and password fields.");
      return;
    }

    const user = userData.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      alert("Login successful");
      setLog(user.username);

      Navigate("/");
    } else {
      alert("Login failed");
    }
  };
  

  return (
    <div className="container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Login</button>
        </form>
        
        <p>
          Create a New Account?
          <Link to={"/registration"}>Register</Link>
        </p>
        <div className="adminpage">
        <Button onClick={() => Navigate('/adminlogin')}>Admin</Button>
      </div>
      </div>
      
    </div>
  );
}

export default Login;
