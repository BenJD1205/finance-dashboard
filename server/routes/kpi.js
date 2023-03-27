import express from "express";
import { getKPI } from "../controllers/kpi.controller.js";
const router = express.Router();

router.get("/kpis", getKPI);

export default router;
