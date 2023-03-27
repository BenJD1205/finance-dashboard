import Transaction from "../models/Transaction.js";

const getTransactions = async (req, res, next) => {
    try {
        const getTrans = await Transaction.find();
        res.status(200).json(getTrans);
    } catch (err) {
        next(err);
    }
};

export { getTransactions };
