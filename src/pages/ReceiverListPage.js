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

const API_URL = "http://localhost:5005";

function ReceiverListPage() {
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

   // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllReceivers();
  }, []);

  return (
    <div className="ProjectListPage">
      <Container>
        {/* <SearchBar searchFilter={searchFilter} /> */}
        <Row>
          {receivers.map((receiver) => {
            const now = receiver.receivedAmount / (receiver.askingAmount / 100);
            return (
              <Col key={receiver._id} className="col-6 col-md-3 col-lg-2">
                <Card className="card-img-top">
                  <Link to={`/receivers/${receiver._id}`}>
                    <Image
                      src={receiver.imageURL}
                      alt="Receiver"
                      className="card-img-top"
                    />
                  </Link>
                  <p>{receiver.name}</p>
                  {/* <p>{receiver.description}</p> */}

                  <ProgressBar now={now} label={`${now}%`}></ProgressBar>
                  <p>
                    {receiver.askingAmount - receiver.receivedAmount}{" "}
                    {receiver.currency} to go
                  </p>
                  <Link to={`/donate/${receiver._id}`}>
                    <Button size="sm">Donate</Button>
                  </Link>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
      <AddReceiver refreshReceivers={getAllReceivers} />
    </div>
  );
}

export default ReceiverListPage;
