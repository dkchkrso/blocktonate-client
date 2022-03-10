import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap/";
import { ApiUrlContext } from "../context/api.context";

// const API_URL = "http://localhost:5005";
// const API_URL = "https://blocktonate.herokuapp.com";

function SignupPage(props) {
  const value = useContext(ApiUrlContext);
  const API_URL = value;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, name };

    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state
    axios
      .post(`${API_URL}/auth/signup`, requestBody)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="SignupPage">
      <h1>Sign Up</h1>

      <form onSubmit={handleSignupSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />
        <br></br>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
        <br></br>
        <label>Name:</label>
        <input type="text" name="name" value={name} onChange={handleName} />
        <br></br>
        <Button type="submit">Sign Up</Button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <br></br>
      <br></br>
      <p>Already have account?</p>
      <Link to={"/login"}>
        {" "}
        <Button variant="warning">Login</Button>
      </Link>
    </div>
  );
}

export default SignupPage;
