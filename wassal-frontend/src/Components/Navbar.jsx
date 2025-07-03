import { useContext } from "react";
import { LoginContext } from "./Login";

import UserIcon from "../assets/UserIcon.png";
import LocationIcon from "../assets/LocationIcon.png";
import Wassal from "../assets/Wassal.png";
import DeliveryBike from "../assets/DeliveryBike.png";

export function Navbar() {
  const { setShowLogin } = useContext(LoginContext);

  return (
    <>
      <div className="navbar-delivery">
        <img src={DeliveryBike} />
      </div>
      <nav className="navbar d-flex justify-content-between align-items-center py-0 mb-5">
        <a href="#" className="wassal ms-5">
          <img src={Wassal} alt="Wassal" />
        </a>
        <div className="navbar-icons me-5">
          <a
            href="#"
            className="me-5"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <img src={LocationIcon} alt="Location" />
          </a>
          <a
            href="#"
            className="me-5"
            onClick={(e) => {
              e.preventDefault();
              setShowLogin(true);
            }}
          >
            <img src={UserIcon} alt="Profile" />
          </a>
        </div>
      </nav>
    </>
  );
}
