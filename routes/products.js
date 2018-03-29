const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const { ProductList } = require("../helpers/prods");

const newProd = new ProductList();
const allProds = newProd.getAllProducts();
const names = allProds.map(obj => obj.name);

module.exports = router;

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
    console.log("req.paramsGET: ", req.params);
    console.log("allProdsGET: ", allProds);
    const bodyData = allProds.filter(elem => {
      console.log("elem: ", elem);
      return elem.id === Number(req.params.id);
    });
    console.log("bodyData", bodyData);
    //console.log("allProds", allProds);
    return res.render("product", {
      id: req.params.id,
      name: bodyData[0].name,
      price: bodyData[0].price,
      inventory: bodyData[0].inventory
    });
  })
  .get("/products/:id/edit", (req, res) => {
    return res.render("edit");
  });

router.post("/products", (req, res) => {
  const { body } = req;
  //console.log("body: ", body);
  const { name, price, inventory } = body;
  const id = newProd.getId();
  //console.log("id: ", id);
  newProd.addProduct(name, price, inventory);
  return res.redirect(`/products/${id}`);
});

router.put("/products/:id/edit", (req, res) => {
  const { body } = req;
  const { name, price, inventory } = body;
  const id = Number(req.params.id);
  console.log("body: ", body);
  console.log("params: ", req.params);
  newProd.updateProduct(id, name, price, inventory);
  console.log("allProdsPut: ", allProds);
  return res.redirect(`/products/${id}`);
});
