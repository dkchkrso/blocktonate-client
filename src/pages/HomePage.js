import ReceiverListHome from "../components/ReceiverListHome";
import ReceiverListPage from "../pages/ReceiverListPage";

import { Container, Image } from "react-bootstrap/";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import refugees_bg from "./refugees_bg_crop.jpg"

function HomePage() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <div>
      {!isLoggedIn && (
        <div>
          <Image className="refugees-bg" src={refugees_bg} alt="refugees" />
          <Container>
            <h1 className="header_home">Make a donation, change a life</h1>
            <br />
            <br />
            <h2>BLOCKTONATE makes donations to refugees easy and cheep</h2>
            <br />
            <br />
            <br />
            <h3>
              Each BLOCKTONATE donation helps people build a better future for
              themselves and their families.
            </h3>
            <br></br>
            <ReceiverListHome />
          </Container>
        </div>
      )}
      {isLoggedIn && <ReceiverListPage />}
    </div>
  );
}

export default HomePage;
