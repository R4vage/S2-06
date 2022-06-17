import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import {ReactComponent as Store}  from "../../assets/icons/store.svg";
import {ReactComponent as Library} from "../../assets/icons/library.svg";
import {ReactComponent as Profile}  from "../../assets/icons/profile.svg";
import "./Sidebar.css";

const Sidebar = () => {
  const [isHomeSelected, setIsHomeSelected] = useState()
  return (
    <>
      <nav className="sidebar  ">
        <div className="sidebar-Header">
          <img className="imageLogo" src={logo} alt="Imagenes Gama" />
          <h4 className="logo-header">Gama Games</h4>
        </div>

        <ul className="menuSidebar">
          <Link className="elements-sidebar" elements-sidebar to={"/"}>
            <li className="Sidebar--li">
              <div className="icon">
               <Store className="imagen-sidebar"/>
              </div>
              <h4 className="text-sidebar">Store</h4>
            </li>
          </Link>

          <Link className="elements-sidebar" elements-sidebar to={"/private"} onClick={()=>setIsHomeSelected(true)}>
            <li className={isHomeSelected?"Sidebar--li selected": "Sidebar--li"}>
              <div className="icon">
                <Library className="imagen-sidebar"/>
              </div>
              <h4 className="text-sidebar">Library</h4>
            </li>
          </Link>

          <Link className="elements-sidebar" to={"/private/profile"} onClick={()=>setIsHomeSelected(false)}>
            <li className={!isHomeSelected?"Sidebar--li selected": "Sidebar--li"}>
              <div className="icon">
                <Profile className="imagen-sidebar"/>
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
