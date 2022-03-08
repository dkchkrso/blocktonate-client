import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

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
