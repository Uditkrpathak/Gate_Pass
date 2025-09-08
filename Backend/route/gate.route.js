import express from "express"
import { apply, Approval, gatePassSecurity } from "../controller/Gate.controller.js"
import { authorize, isAuthenticated } from "../middleware/auth.js";

const GateApply = express.Router()

GateApply.post("/apply",isAuthenticated,authorize(["student"]),apply);
GateApply.post("/approve/:id",isAuthenticated,authorize(["hod","warden"]),Approval);
GateApply.post("/security",isAuthenticated,authorize(["security"]),gatePassSecurity)

export default GateApply