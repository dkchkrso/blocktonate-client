import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import WalletCard from "./WalletCard";
import { Button, Image, Container} from "react-bootstrap/";
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
          <Image
            className="logo-img"
            src={logo}
            alt="Blocktonate logo"
            width="150"
            height="40"
          />
        </Link>
      </div>

      <div>
        {isLoggedIn && (
          <div>
            <Link to="/receivers">
              <Button>Receivers</Button>
            </Link>
            <WalletCard />
            <Link to="/profile">
              <Button variant="light">Profile</Button>
            </Link>
            <Button onClick={logOutUser} variant="light">
              Logout
            </Button>
          </div>
        )}

        {!isLoggedIn && (
          <>
            <Link to="/signup">
              <Button className="sign-up-btn" variant="light">
                Sign Up
              </Button>
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
