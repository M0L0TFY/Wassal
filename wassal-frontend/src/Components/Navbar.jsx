import { useContext } from "react";
import { Login, LoginContext } from "./Login";

import userIcon from "../assets/userIcon.png";

export function Navbar() {
  const { setShowLogin } = useContext(LoginContext);

  return (
    <>
      <nav className="navbar">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setShowLogin(true);
          }}
        >
          <img src={userIcon} alt="Profile" style={{ cursor: "pointer" }} />
        </a>
      </nav>
    </>
  );
}
