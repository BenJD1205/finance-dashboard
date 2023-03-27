import express from "express";
import kpiRoutes from "./kpi.js";
import productRoutes from "./product.js";
import transactionRoutes from "./transaction.js";
const router = express.Router();

router.use("/kpi", kpiRoutes);
router.use("/product", productRoutes);
router.use("/transaction", transactionRoutes);

export default router;
