import db from "../../../utils/db";
// const db = require("../../../utils/db");
const products = db.products;
const createProduct = (req, resp) => {
  if (req.method !== "POST") {
    resp.status(404).json({
      status: 404,
      message: `not found with ${req.method}`,
    });
  } else {
    console.log("hellloooo");
    const productss = products.create(req.body);
    resp.status(200).json({
      msg: "created succesfully",
    });
  }
};
// module.exports = createProduct;
export default createProduct;
