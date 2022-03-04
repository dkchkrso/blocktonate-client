import ReceiverListHome from "../components/ReceiverListHome";
import { Container} from "react-bootstrap/";

function HomePage() {
  return (
    <div>
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

      <ReceiverListHome />
    </div>
  );
}

export default HomePage;
