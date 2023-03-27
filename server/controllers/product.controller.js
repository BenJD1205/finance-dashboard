import Product from "../models/Product.js";

const getProducts = async (req, res, next) => {
    try {
        const getProducts = await Product.find();
        res.status(200).json(getProducts);
    } catch (err) {
        next(err);
    }
};

export { getProducts };
