import express from "express";
import { login, register } from "../controller/User.controller.js";

const Userrouter = express.Router();

Userrouter.post("/register",register);

Userrouter.post("/login",login)

export default Userrouter;

