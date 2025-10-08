import express from "express";

import dotenv from "dotenv";
import database from "./utils/database.js";
import Userrouter from "./route/User.route.js";
import GateApply from "./route/gate.route.js";
import cookieParser from "cookie-parser";
import cors from "cors"

dotenv.config();

const port = process.env.PORT || 4000;

const app = express();

app.use(express.json());

app.use(
    cors({
        origin:["http://localhost:5173"],
        credentials: true

    })
)

app.use(cookieParser())

app.get('/',(req,res)=>{
    res.json({messag:"Api is working"});
})


app.use("/api/v1",Userrouter);
app.use("/api/v2",GateApply)

database();

app.listen(3000,()=>{
    console.log(`Server is running at PORT ${port}`);
})




