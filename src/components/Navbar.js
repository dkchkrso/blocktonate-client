import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import WalletCard from "./WalletCard";
import { Button, Image } from "react-bootstrap/";
import logo from "./logo1.jpg";

function Navbar() {

  const {
    isLoggedIn,
    user,
    logOutUser
  } = useContext(AuthContext);

  return (
    <nav className="Navbar">

      <Link to="/">
        <Image src={logo}
            alt="Blocktonate"
            width="100"
            height="30" />
        <Button>Home</Button>
      </Link>

      {isLoggedIn && (
        <>
          <Link to="/receivers">
            <Button>Receivers</Button>
          </Link>
          <Button onClick={logOutUser}>Logout</Button>
          <span>{user && user.name}</span>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup">
            <Button>Sign Up</Button>
          </Link>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </>
      )}

      <WalletCard />
    </nav>
  );
}

export default Navbar;
