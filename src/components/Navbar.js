import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import WalletCard from "./WalletCard";
import { Button, Image} from "react-bootstrap/";
import logo from "./logo1.jpg";

function Navbar() {

  const {
    isLoggedIn,
    user,
    logOutUser
  } = useContext(AuthContext);

  return (
    <nav className="Navbar">
        <div>
          <Link to="/">
          <Image className="logo-img" src={logo} alt="Blocktonate logo" width="150" height="40" />
          {/* <Button>Home</Button> */}
        </Link>
        </div>

      <div>
        {isLoggedIn && (
          <>
            <Link to="/receivers">
              <Button>Receivers</Button>
            </Link>
            <Button onClick={logOutUser} variant="light">
              Logout
            </Button>
            <span>User: {user && user.name}</span>
            <WalletCard />
          </>
        )}
  
        {!isLoggedIn && (
          <>
            <Link to="/signup">
              <Button className="sign-up-btn" variant="light">Sign Up</Button>
            </Link>
            <Link to="/login">
              <Button variant="light">Login</Button>
            </Link>
          </>
        )}
  
      </div>
    </nav>
  );
}

export default Navbar;
