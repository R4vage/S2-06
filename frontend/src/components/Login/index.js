import React from "react";
import { useState } from "react";
import Alerta from "../Alerta";
import logo from "../../assets/logo.svg";
import "./login.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // validando que todos los campos se completen
    if ([email, password].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true
      });
      return;
    }

    if (password.length < 6) {
      setAlerta({
        msg: "Las contraseña tiene que ser de mas de 6 caracteres",
        error: true
      });
      return;
    }
    setAlerta({});
    try {
      const { data } = await axios.post("http://localhost:4000/api/user/login", {
        email,  
        password,
      });
      setAlerta({
        // aca extraemos el error que viene desde el servidor
        msg: data.msg,
        error: false
      });
      dispatch(createSlice.actions.setUser({    
        userID : data._id,
        email: data.email,
        token: data.token,
        isLogged: true}))
    } catch (error) {
      setAlerta({
        // aca extraemos el error que viene desde el servidor
        msg: error.response.data.msg,
        error: true
      });
    }
  };
  const { msg } = alerta;
  return (
    <>
      <div className="container">
        <div className="container-header">
          <div className="register-header">
            <img className="" src={logo} alt="logo" />
            <h1 className="title">Log In</h1>
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

          <div className="control-form">
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <input className="submit-register" type="submit" value="Log In" />
        </form>
        <nav className="forgot-register">
          <Link className="link-login" to={"/forgot"}>
            <p className="login--register">Did you forget your password? Click here!</p>
          </Link>
          <Link className="link-login" to={"/register"}>
            {" "}
            <p className="login--register">If you dont have a user, Click here!</p>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Login;
