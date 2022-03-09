import { useState } from "react";
import axios from "axios";

// const API_URL = "http://localhost:5005";
const API_URL = "https://blocktonate.herokuapp.com";

function AddReceiver(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [askingAmount, setAskingAmount] = useState(0);
  const [receivedAmount, setReceivedAmount] = useState(0);
  const [currency, setCurrency] = useState("BTC");
  const [categories, setCategories] = useState("");
  const [imageURL, setImageURL] = useState(
    "https://th.bing.com/th/id/R.d4cd92a0789ceeb33a2d166622c900ca?rik=6CFrn23DW%2fYgeA&riu=http%3a%2f%2fwww.millerrosenfalck.com%2fwp-content%2fuploads%2f2020%2f01%2fdefault-profile-300x300.png&ehk=BOb5Kx9NtLh%2fVKMqdEEfOHSAC1GVVcqjIBqdPG7bBNw%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      name,
      description,
      walletAddress,
      askingAmount,
      receivedAmount,
      currency,
      categories,
      imageURL,
    };

    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/api/receiver`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // Reset the state
        setName("");
        setDescription("");
        setWalletAddress("");
        setAskingAmount(0);
        setReceivedAmount(0);
        setCurrency("BTC");
        setCategories("");
        setImageURL(
          "https://th.bing.com/th/id/R.d4cd92a0789ceeb33a2d166622c900ca?rik=6CFrn23DW%2fYgeA&riu=http%3a%2f%2fwww.millerrosenfalck.com%2fwp-content%2fuploads%2f2020%2f01%2fdefault-profile-300x300.png&ehk=BOb5Kx9NtLh%2fVKMqdEEfOHSAC1GVVcqjIBqdPG7bBNw%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
        );

        props.refreshReceivers();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="AddProject">
      <h3>Request new donation</h3>

      <form onSubmit={handleSubmit}>
        
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <label>Description:</label>
          <textarea
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label>Wallet Address:</label>
          <textarea
            type="text"
            name="walletAddress"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            placeholder="e.g. 0xda1c662dc96FCad610BBf97c9a2E2A3944E93a69 "
            required
          />
          <label>Asking Amount:</label>
          <textarea
            type="number"
            name="askingAmount"
            value={askingAmount}
            onChange={(e) => setAskingAmount(e.target.value)}
          />
          {/* <label>Received Amount:</label>
          <textarea
            type="number"
            name="receivedAmount"
            value={receivedAmount}
            onChange={(e) => setReceivedAmount(e.target.value)}
            disabled
          /> */}
          <label>Currency:</label>
          <textarea
            type="text"
            name="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          />
          <label>Categories:</label>
          <textarea
            type="text"
            name="categories"
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
          />
          <label>Image:</label>
          <textarea
            type="text"
            name="imageURL"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
          <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddReceiver;
