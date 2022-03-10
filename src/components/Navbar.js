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
            <Link to="/request">
              <Button className="sign-up-btn">Request New Donation</Button>
            </Link>

            <WalletCard />
            <Link to="/profile">
              <Button className="sign-up-btn" variant="light">
                Profile
              </Button>
            </Link>
            <Button
              className="sign-up-btn"
              onClick={logOutUser}
              variant="light"
            >
              Logout
            </Button>
          </div>
        )}

        {!isLoggedIn && (
          <>
            <Link to="/about">
              <Button className="sign-up-btn" variant="light">
                About
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="sign-up-btn" variant="light">
                Sign Up
              </Button>
            </Link>
            <Link to="/login">
              <Button className="sign-up-btn" variant="light">
                Login
              </Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
