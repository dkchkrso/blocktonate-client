import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import WalletCard2 from "./WalletCard2";
import { Button } from "react-bootstrap/";

function Navbar2() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="Navbar2">
      <div>
        {isLoggedIn && (
          <>
            <p>Logged in as: {user && user.name}</p>
          
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar2;
