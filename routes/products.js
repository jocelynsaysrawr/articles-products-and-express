const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const { ProductList } = require("../helpers/prods");

const newProd = new ProductList();
const allProds = newProd.getAllProducts();
const names = allProds.map(obj => obj.name);

module.exports = router;

let currBody;
let currID;

router.use(bodyParser.urlencoded({ extended: true }));

router
  .get("/", (req, res) => {
    return res.render("index");
  })
  .get("/products/all", (req, res) => {
    return res.render("allProducts", { allProds });
  })
  .get("/products/new", (req, res) => {
    return res.render("new");
  })
  .get("/products/:id", (req, res) => {
    return res.render("product", {
      id: currID,
      name: currBody.name,
      price: currBody.price,
      inventory: currBody.inventory
    });
  })
  .get("/products/:id/edit", (req, res) => {
    return res.render("edit");
  });

router.post("/products", (req, res) => {
  const { body } = req;
  const { name, price, inventory } = body;
  currBody = body;
  currID = newProd.addProduct(name, price, inventory);
  console.log("currBody", currBody);
  console.log("currID", currID);
  console.log("allProds", allProds);
  return res.redirect(`/products/${currID}`);
});

const getById = arr => {
  arr.filter;
};
