import React from "react";
import { useState } from "react";
import Alerta from "../../components/Alerta";
import logo from "../../assets/logo.svg";
import "../../components/Login/login.css";
import { Link } from "react-router-dom";



function ForgotEmail() {
    const [email, setEmail] = useState("");
    const [alerta, setAlerta] = useState({});
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      // validando que todos los campos se completen
      if ([email].includes("")) {
        setAlerta({
          msg: "E-mail field can't be empty",
          error: true
        });
        return;
      }
      setAlerta({});
    };
    const { msg } = alerta;
  
    return ( 
        
<div className="Forgot">
        <div className="container-header">
          <div className="register-header">
            <img className="" src={logo} alt="logo" />
            <h1 className="title">Forgot Password</h1>
            <h1 className="hidden">Up</h1>
          </div>
        </div>
        {msg && <Alerta alerta={alerta} />}
        <form onSubmit={handleSubmit} className="register-form">
          <div className="control-form">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <input className="submit-register" type="submit" value="forgot" />
        </form>
      </div>
     );
}

export default ForgotEmail;