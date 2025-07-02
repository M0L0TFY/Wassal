import { useContext } from "react";
import { LoginContext } from "./Login";

import userIcon from "../assets/userIcon.png";
import languageIcon from "../assets/languageIcon.png";

export function Navbar() {
  const { setShowLogin } = useContext(LoginContext);

  return (
    <>
      <nav className="navbar d-flex justify-content-between align-items-center m-5">
        <a href="#" className="ms-5">
          WassalLogo
        </a>
        <div className="me-5">
          <a
            href="#"
            className="me-4"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <img src={languageIcon} alt="Language" />
          </a>
          <a
            href="#"
            className="me-5"
            onClick={(e) => {
              e.preventDefault();
              setShowLogin(true);
            }}
          >
            <img src={userIcon} alt="Profile" />
          </a>
        </div>
      </nav>
    </>
  );
}
