import ReceiverListHome from "../components/ReceiverListHome";
import ReceiverListPage from "../pages/ReceiverListPage";

import { Container } from "react-bootstrap/";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function HomePage() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <div>
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
          <ReceiverListHome />
        </Container>
      )}
      {isLoggedIn && <ReceiverListPage />
      }
    </div>
  );
}

export default HomePage;
