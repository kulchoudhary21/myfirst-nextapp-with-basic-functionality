import db from "../../../utils/db";
const products = db.products;
const getAll = async (req, resp) => {
  const productss = await products.findAll();
  resp.status(200).json({
    msg: "created succesfully",
    productss:productss
  });
};
export default getAll
