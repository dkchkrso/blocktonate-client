import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Card, Row, Col, Image, ProgressBar} from "react-bootstrap/";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { ApiUrlContext } from "../context/api.context";

// const API_URL = "http://localhost:5005";
// const API_URL = "https://blocktonate.herokuapp.com";


function ReceiverListPage() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const value = useContext(ApiUrlContext);
  const API_URL = value;

  console.log("API_URL   " + API_URL);
  console.log("value   " + value);

  const [receivers, setReceivers] = useState([]);

  const getAllReceivers = () => {
    // Get the token from the localStorage

    axios
      .get(`${API_URL}/api`)
      .then((response) => setReceivers(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllReceivers();
  }, []);

  return (
    <Container>
      <Row>
        {receivers.map((receiver) => {
          const now = receiver.receivedAmount / (receiver.askingAmount / 100);
          return (
            <Col key={receiver._id} className="col-6 col-md-3 col-lg-2">
              <Card className="card-img-top">
                {!isLoggedIn && (
                  <Link to={"/login"}>
                    <Image
                      src={receiver.imageURL}
                      alt="Receiver"
                      className="card-img-top"
                    />
                  </Link>
                )}

                {isLoggedIn && (
                  <Image
                    src={receiver.imageURL}
                    alt="Receiver"
                    className="card-img-top"
                  />
                )}

                <p>{receiver.name}</p>
                <p>
                  Requesting: {receiver.askingAmount} {receiver.currency}
                </p>
                <ProgressBar now={now} label={`${now}%`}></ProgressBar>
                <p>
                  {receiver.askingAmount - receiver.receivedAmount}{" "}
                  {receiver.currency} to go
                </p>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default ReceiverListPage;
