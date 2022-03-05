import ReceiverListHome from "../components/ReceiverListHome";
import { Container } from "react-bootstrap/";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import StartPayment from "../components/StartPayment";

function HomePage() {
  
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <div>
      <StartPayment />
      {!isLoggedIn && (
        <Container>
          <h1>Make a donation, change a life</h1>
          <p>
            Each Blocktonate donation helps people build a better future for
            themselves and their families.
          </p>
          <br></br>
          <p>Blocktonate makes donations to refugees easy and cheep</p>
          <br></br>
        </Container>
      )}
      <ReceiverListHome />
    </div>
  );
}

export default HomePage;
