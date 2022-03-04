import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Card, Row, Col, Image, ProgressBar} from "react-bootstrap/";

const API_URL = "http://localhost:5005";

function ReceiverListPage() {
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
    <Container>
      <Row>
        {receivers.map((receiver) => {
            const now = receiver.receivedAmount / (receiver.askingAmount / 100);
          return (
            <Col className="col-6 col-md-3 col-lg-2">
              {/* <Col className="col-12 col-md-3 col-lg-2"></Col> */}
              <Card key={receiver._id} className="card-img-top">
                {/* <Link to={`/receivers/${receiver._id}`}> */}
                <Image
                  src={receiver.imageURL}
                  alt="Receiver"
                  className="card-img-top"
                />
                <p>{receiver.name}</p>
               <ProgressBar now={now} label={`${now}%`}></ProgressBar>
                <p>
                  {receiver.askingAmount - receiver.receivedAmount} {" "}{receiver.currency} to go
                </p>
                {/* </Link> */}
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default ReceiverListPage;
