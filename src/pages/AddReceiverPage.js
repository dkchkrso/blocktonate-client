import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddReceiver from "../components/AddReceiver";
import SearchBar from "../components/SearchBar";
import {
  Container,
  Card,
  Row,
  Col,
  Image,
  ProgressBar,
  Button,
} from "react-bootstrap/";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { ApiUrlContext } from "../context/api.context";

function AddReceiverPage() {
  
  const value = useContext(ApiUrlContext);
  const API_URL = value;
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  
  const [receivers, setReceivers] = useState([]);

  const getAllReceivers = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers

    axios
      .get(`${API_URL}/api/receivers`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setReceivers(response.data))
      .catch((error) => console.log(error));
  };
  
  useEffect(() => {
    getAllReceivers();
  }, []);

    return (
      <div>
        {/* <h1>Request Donation</h1> */}
        <AddReceiver refreshReceivers={getAllReceivers} />
      </div>
    );
}

export default AddReceiverPage