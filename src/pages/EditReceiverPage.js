import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap/";
import { Link } from "react-router-dom";

// const API_URL = "http://localhost:5005";
const API_URL = "blocktonate.herokuapp.com";

function EditReceiverPage(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [askingAmount, setAskingAmount] = useState(0);
  const [receivedAmount, setReceivedAmount] = useState(0);
  const [currency, setCurrency] = useState("");
  const [categories, setCategories] = useState("");
  const [imageURL, setImageURL] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${API_URL}/api/receivers/${id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const oneReceiver = response.data;
        setName(oneReceiver.name);
        setDescription(oneReceiver.description);
        setWalletAddress(oneReceiver.walletAddress);
        setAskingAmount(oneReceiver.askingAmount);
        setReceivedAmount(oneReceiver.receivedAmount);
        setCurrency(oneReceiver.currency);
        setCategories(oneReceiver.categories);
        setImageURL(oneReceiver.imageURL);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const storedToken = localStorage.getItem("authToken");
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

    axios
      .put(`${API_URL}/api/receivers/${id}`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        navigate(`/receivers/${id}`);
      });
  };

  const deleteReceiver = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .delete(`${API_URL}/api/receivers/${id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        navigate("/receivers");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="EditProjectPage">
      <h3>Edit</h3>
      <Link to="/receivers">
        <Button>Back</Button>
      </Link>
      <form onSubmit={handleFormSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
        />
        <label>Asking Amount:</label>
        <textarea
          type="number"
          name="askingAmount"
          value={askingAmount}
          onChange={(e) => setAskingAmount(e.target.value)}
        />
        <label>Received Amount:</label>
        <textarea
          disabled="disabled"
          type="number"
          name="receivedAmount"
          value={receivedAmount}
          onChange={(e) => setReceivedAmount(e.target.value)}
        />
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
        <br></br>
        <Button variant="success" type="submit">
          Update
        </Button>
      </form>
      <br></br>
      <Button variant="danger" onClick={deleteReceiver}>
        Delete
      </Button>
    </div>
  );
}

export default EditReceiverPage;
