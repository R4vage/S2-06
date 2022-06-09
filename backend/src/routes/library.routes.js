import express from "express";
import checkAuth from "../middleware/checkAuth.js";
import {
    getLibrary
  } from "../controllers/library.controllers.js";




/* router.post("/", addGame);*/
routerLibrary.get("/", checkAuth, getLibrary); 



export default routerLibrary;