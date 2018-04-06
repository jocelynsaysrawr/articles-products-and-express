const express = require("express");
const router = express.Router();
const { ProductList } = require("../helpers/prods");

const newProd = new ProductList();
const allProds = newProd.getAllProducts();
const names = allProds.map(obj => obj.name);

module.exports = router;

router
  .get("/", (req, res) => {
    return res.render("index");
  })
  .get("/products", (req, res) => {
    return res.render("allProducts", { allProds });
  })
  .get("/products/new", (req, res) => {
    return res.render("new", {
      product: true
    });
  })
  .get("/products/:id", (req, res) => {
    const bodyData = allProds.filter(obj => obj.id === Number(req.params.id));
    return res.render("product", {
      id: req.params.id,
      name: bodyData[0].name,
      price: bodyData[0].price,
      inventory: bodyData[0].inventory
    });
  })
  .get("/products/:id/edit", (req, res) => {
    const formData = allProds.filter(obj => obj.id === Number(req.params.id));
    return res.render("edit", {
      id: req.params.id,
      product: true,
      name: formData[0].name,
      price: formData[0].price,
      inventory: formData[0].inventory
    });
  });

router.post("/products", (req, res) => {
  const { name, price, inventory } = req.body;
  const id = newProd.getId();
  newProd.addProduct(name, price, inventory);
  return res.redirect(`/products/${id}`);
});

router.put("/products/:id/edit", (req, res) => {
  const { name, price, inventory } = req.body;
  const id = Number(req.params.id);
  newProd.updateProduct(id, name, price, inventory);
  return res.redirect(`/products/${id}`);
});

router.delete("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  newProd.deleteProduct(id);
  console.log("allProdsDelete: ", allProds);
  return res.redirect("/products");
});
