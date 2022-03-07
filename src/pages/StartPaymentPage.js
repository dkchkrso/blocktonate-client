import React from 'react';
import { useState, useEffect } from "react";
import StartPayment from "../components/StartPayment";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Button } from "react-bootstrap/";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5005";

function StartPaymentPage(props) {
  const [name, setName] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [askingAmount, setAskingAmount] = useState(0);
  const [receivedAmount, setReceivedAmount] = useState(0);
  const [currency, setCurrency] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${API_URL}/api/receivers/${id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const oneReceiver = response.data;
        setName(oneReceiver.name);
        setWalletAddress(oneReceiver.walletAddress);
        setAskingAmount(oneReceiver.askingAmount);
        setReceivedAmount(oneReceiver.receivedAmount);
        setCurrency(oneReceiver.currency);

      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <Container>
      <Link to="/receivers">
        <Button>Back</Button>
      </Link>
      <div>
        {name} is asking for: {askingAmount} {currency}
      </div>
      <div>
        {name} has so far received: {receivedAmount} {currency}
      </div>
      <StartPayment walletAddress={walletAddress} name={name} />
    </Container>
  );
}

export default StartPaymentPage