import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Card, Image, ProgressBar, Button, Carousel } from "react-bootstrap/";

const API_URL = "http://localhost:5005";

function ReceiverDetailsPage(props) {
  const [receiver, setReceiver] = useState(null);

  const { id } = useParams();

  // Helper function that makes a GET request to the API
  // and retrieves the project by id
  const getReceiver = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/receivers/${id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })

      .then((response) => {
        const oneReceiver = response.data;
        setReceiver(oneReceiver);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getReceiver();
}, []);
  // const now = receiver.receivedAmount / (receiver.askingAmount / 100);

  return (
    <div className="ProjectDetails">
      <Link to="/receivers">
        <Button>Back</Button>
      </Link>
      <br></br>
      {receiver && (
          
        <Card style={{ width: "40rem" }}>
          <h2>{receiver.name}</h2>
          <ProgressBar
            now={receiver.receivedAmount / (receiver.askingAmount / 100)}
            label={`${
              receiver.receivedAmount / (receiver.askingAmount / 100)
            }%`}
          ></ProgressBar>
          <Image
            width={25}
            src={receiver.imageURL}
            alt="Receiver"
            className="card-img-top"
          />

          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.pexels.com/photos/6463374/pexels-photo-6463374.jpeg?cs=srgb&dl=pexels-ahmed-akacha-6463374.jpg&fm=jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Djiyuiyas path to school</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.pexels.com/photos/6918509/pexels-photo-6918509.jpeg?cs=srgb&dl=pexels-ahmed-akacha-6918509.jpg&fm=jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Djiyuiyas siblings</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.pexels.com/photos/6478551/pexels-photo-6478551.jpeg?cs=srgb&dl=pexels-ahmed-akacha-6478551.jpg&fm=jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Djiyuiya doing his Duties</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          {/* <p>{receiver.description}</p> */}
          <ProgressBar
            now={receiver.receivedAmount / (receiver.askingAmount / 100)}
            label={`${
              receiver.receivedAmount / (receiver.askingAmount / 100)
            }%`}
          ></ProgressBar>
          <br></br>
          <p>
            {receiver.askingAmount - receiver.receivedAmount}{" "}
            {receiver.currency} to go
          </p>
          <p>{receiver.description}</p>
        </Card>
      )}

      {/* {receiver &&
        project.tasks.map((task) => (
          <li className="TaskCard card" key={task._id}>
            <h3>{task.title}</h3>
            <h4>Description:</h4>
            <p>{task.description}</p>
          </li>
        ))} */}

      <Link to="/receivers">
        <Button>Back</Button>
      </Link>

      <Link to={`/receivers/edit/${id}`}>
        <button>Edit</button>
      </Link>
    </div>
  );
}

export default ReceiverDetailsPage;
