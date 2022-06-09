import express from "express";
import checkAuth from "../middleware/checkAuth.js";
import {
    getLibrary
  } from "../controllers/library.controllers.js";



const routerLibrary = express.Router();

/* router.post("/", addGame);*/
routerLibrary.get("/", checkAuth, getLibrary); 


export default routerLibrary;