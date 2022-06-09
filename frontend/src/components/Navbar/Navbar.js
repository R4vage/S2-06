import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import portrait from "../../assets/portrait.svg";
import userIcon from "../../assets/icons/userIcon.svg";
import supportIcon from "../../assets/icons/supportIcon.svg";
import communityIcon from "../../assets/icons/communityIcon.svg";
import storeIcon from "../../assets/icons/storeIcon.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isClosed, setIsClosed] = useState(true);
  return (
    <header className="Navbar">
      <div
        className={
          isClosed
            ? "Navbar--hamburger__container"
            : "Navbar--hamburger__container conOpen"
        }
        onClick={() => setIsClosed(!isClosed)}
      >
        <span className="Navbar--hamburger"> </span>
      </div>
      <nav className={isClosed ? "Navbar--toggle" : "Navbar--toggle navOpen"}>
        <div className="Navbar--userData">
          <img className="Navbar--userHero" src={portrait} alt="Portrait Icon" />
          <p className="Navbar--userName">Toto Perez</p>
          <p className="Navbar--userEmail">nombredeusuario@gmail.com</p>
        </div>
        <ul className="Navbar--list">
          <Link to={"/login"}>
            {" "}
            <li>
              {" "}
              <img src={userIcon} alt="userIcon" />
              Login
            </li>
          </Link>
          <li>
            {" "}
            <img src={supportIcon} alt="Store" />
            Store
          </li>
          <li>
            {" "}
            <img src={communityIcon} alt="Community Icon" />
            Community
          </li>
          <li>
            {" "}
            <img src={storeIcon} alt="Support Icon" />
            Support
          </li>
        </ul>
      </nav>
      <Link to={"/"}>
        <img src={logo} className="Navbar--logo" alt="Logo" />
      </Link>
    </header>
  );
}

export default Navbar;
