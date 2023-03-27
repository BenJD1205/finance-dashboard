import KPI from "../models/KPI.js";

const getKPI = async (req, res, next) => {
    try {
        const kpis = await KPI.find();
        res.status(200).json(kpis);
    } catch (err) {
        next(err);
    }
};

export { getKPI };
