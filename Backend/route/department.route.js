import express from "express";
import { createDepartment, getDepartments } from "../controller/department.controller.js";
import { authorize, isAuthenticated } from "../middleware/auth.js";


const departmentRouter = express.Router();

departmentRouter.post("/create", isAuthenticated, createDepartment);
departmentRouter.get("/get", isAuthenticated, getDepartments);



export default departmentRouter;
