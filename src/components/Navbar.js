import { Link } from "react-router-dom";
import { Button } from "react-bootstrap/";
 

function Navbar() {
  return (
    <nav className="Navbar">
      <Link to="/">
        <button>Home</button>
      </Link>

      <Link to="/receivers">
         <Button>Receivers</Button>
      </Link>
    </nav>
  );
}

export default Navbar;
