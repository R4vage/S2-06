import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import store from "../../assets/icons/store.svg";
import library from "../../assets/icons/library.svg";
import profile from "../../assets/icons/profile.svg";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <nav className="sidebar  ">
        <div className="sidebar-Header">
          <img className="imageLogo" src={logo} alt="Imagenes Gama" />
          <h4 className="logo-header">Gama Games</h4>
        </div>

        <ul className="menuSidebar">
          <Link className="elements-sidebar" elements-sidebar to={"/"}>
            <li>
              <div className="icon">
                <img className="imagen-sidebar" src={store} alt="Icono store" />
              </div>
              <h4 className="text-sidebar">Store</h4>
            </li>
          </Link>

          <li>
            <div className="icon">
              <img className="imagen-sidebar" src={library} alt="Icono Library" />
            </div>
            <h4 className="text-sidebar">Library</h4>
          </li>
          <Link className="elements-sidebar" to={"profile"}>
            <li>
              <div className="icon">
                <img className="imagen-sidebar" src={profile} alt="Icono Profile" />
              </div>
              <h4 className="text-sidebar">Profile</h4>
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
