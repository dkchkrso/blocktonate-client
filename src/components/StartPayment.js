//import { useState } from "react";
import { ethers } from "ethers";
import ErrorMessage from "./ErrorMessage.js";
import TxList from "./TxList";
import { Button } from "react-bootstrap/";

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const startPayment = async ({ setError, setTxs, ether, addr }) => {
  
  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ethers.utils.getAddress(addr);
    const tx = await signer.sendTransaction({
      to: addr,
      value: ethers.utils.parseEther(ether),
    });
    console.log({ ether, addr });
    console.log("tx", tx);
    setTxs([tx]);
  } catch (err) {
    setError(err.message);
  }
};

export default function App(props) {
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);

  // const [name, setName] = useState("Adam");
  // const [description, setDescription] = useState(
  //   "A donation of one ETH would help me and my family to buy animals for food and for resale in order to support my family.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum orci a sapien imperdiet maximus. Suspendisse vel ex eget mauris efficitur finibus eu a enim. Aenean tellus neque, consectetur sit amet lacus a, hendrerit ornare urna. Fusce venenatis lorem vitae augue suscipit, eu tempor massa vulputate. Praesent iaculis velit libero, vel faucibus sem pulvinar vel. Curabitur viverra nisl dui, a venenatis felis pellentesque id. Donec non lacus diam.\n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum orci a sapien imperdiet maximus. Suspendisse vel ex eget mauris efficitur finibus eu a enim. Aenean tellus neque, consectetur sit amet lacus a, hendrerit ornare urna. Fusce venenatis lorem vitae augue suscipit, eu tempor massa vulputate. Praesent iaculis velit libero, vel faucibus sem pulvinar vel. Curabitur viverra nisl dui, a venenatis felis pellentesque id. Donec non lacus diam."
  // );
  // const [walletAddress, setWalletAddress] = useState(
  //   "0x01F8112a572d2d61c349e2942F51B004Acc870D5"
  // );
  // const [askingAmount, setAskingAmount] = useState(1);
  // const [receivedAmount, setReceivedAmount] = useState(0.50);
  // const [currency, setCurrency] = useState("ETH");
  // const [categories, setCategories] = useState("");
  // const [imageURL, setImageURL] = useState(
  //   "https://images.pexels.com/photos/7386008/pexels-photo-7386008.jpeg?cs=srgb&dl=pexels-ahmed-akacha-7386008.jpg&fm=jpg"
  // );
  // console.log(props);

  // const API_URL = "http://localhost:5005";
  // const API_URL = "https://blocktonate.herokuapp.com";
  
  //   const storedToken = localStorage.getItem("authToken");

  // axios
  //   .get(`${API_URL}/api/receivers/${props.id}`, {
  //     headers: { Authorization: `Bearer ${storedToken}` },
  //   })
  //   .then((response) => {
  //     const oneReceiver = response.data;
  //     console.log("oneReceiver: ", oneReceiver);
  //     console.log("oneReceiver Name: ", oneReceiver.name);
  //     console.log("name1: ", name);
  //     setName(oneReceiver.name);
  //     console.log("name2: ", name);
  //     setDescription(oneReceiver.description);
  //     setWalletAddress(oneReceiver.walletAddress);
  //     setAskingAmount(oneReceiver.askingAmount);
  //     setReceivedAmount(oneReceiver.receivedAmount);
  //     setReceivedAmount(receivedAmount + 10); //ethers.utils.parseEther(ether)
  //     setCurrency(oneReceiver.currency);
  //     setCategories(oneReceiver.categories);
  //     setImageURL(oneReceiver.imageURL);
  //   })
  //   .catch((error) => console.log(error));

  // const requestBody = { name, description, walletAddress, askingAmount, receivedAmount, currency, categories, imageURL };
  // console.log("requestBody: ", requestBody)
  // axios
  //   .put(`${API_URL}/api/receivers/${props.id}`, requestBody, {
  //     headers: { Authorization: `Bearer ${storedToken}` },
  //   })
  //   .then((response) => {
  //     //navigate(`/receivers/${props.id}`);
  //   });
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setError();
    await startPayment({
      setError,
      setTxs,
      ether: data.get("ether"),
      addr: data.get("addr"),
    });
  };

  return (
    <form className="m-4" onSubmit={handleSubmit}>
      <div className="EditProjectPage">
        <main className="mt-4 p-4">
          <h1 className="text-xl font-semibold text-gray-700 text-center">
            Send ETH payment to {props.name}
          </h1>
          <div className="">
            <div className="my-3">
              <input
                type="text"
                name="addr"
                value={props.walletAddress}
                className="input input-bordered block w-full focus:ring focus:outline-none"
                placeholder="Recipient Address"
              />
            </div>
            <div className="my-3">
              <input
                name="ether"
                type="text"
                className="input input-bordered block w-full focus:ring focus:outline-none"
                placeholder="Amount in ETH"
              />
            </div>
          </div>
        </main>
        <footer className="p-4">
          <Button type="submit">Sent Donation</Button>
          <ErrorMessage message={error} />
          <TxList txs={txs} />
        </footer>
      </div>
    </form>
  );
}
