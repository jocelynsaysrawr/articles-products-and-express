const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const { ProductList } = require("../helpers/prods");

const newProd = new ProductList();
module.exports = router;

router.use(bodyParser.urlencoded({ extended: true }));

router
  .get("/", (req, res) => {
    return res.render("index");
  })
  .get("/products/new", (req, res) => {
    return res.render("new");
  })
  .get("/products/:id", (req, res) => {
    return res.render("product");
  })
  .get("/products/:id/edit", (req, res) => {
    return res.render("edit");
  });

router.post("/products", (req, res) => {
  const { body } = req;
  newProd.addProduct(body.name, body.price, body.inventory);
  console.log("products", newProd.getAllProducts());
  return res.json(req.body);
});
