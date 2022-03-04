import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5005";

function ReceiverListHome() {
  const [receivers, setReceivers] = useState([]);

  const getAllReceivers = () => {
 
    axios
      .get(
        `${API_URL}/api/receivers` )
      .then((response) => setReceivers(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllReceivers();
  }, []);

console.log(receivers);
  
return (
  <div className="ProjectListPage">
    TEST
    <h2>Make a loan, change a life</h2>
    {receivers.map((receiver) => {
      return (
        <div className="ProjectCard card" key={receiver._id}>
          <Link to={`/receivers/${receiver._id}`}>
            <h3>{receiver.name}</h3>
          </Link>
        </div>
      );
    })}
  </div>
);
}

export default ReceiverListHome;
