const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct
} = require("../db/DS_products");

module.exports = router;

router
  .get("/", (req, res) => {
    return res.render("index");
  })
  .get("/products", (req, res) => {
    getAllProducts().then(allProds => {
      return res.render("allProducts", { allProds });
    });
  })
  .get("/products/new", (req, res) => {
    return res.render("new", {
      product: true
    });
  })
  .get("/products/:id", (req, res) => {
    getAllProducts().then(productArr => {
      const bodyData = productArr.filter(
        obj => obj.product_sku === Number(req.params.id)
      )[0];
      return res.render("product", {
        id: bodyData.product_sku,
        name: bodyData.product_name,
        price: bodyData.product_price,
        inventory: bodyData.product_inventory
      });
    });
  })
  .get("/products/:id/edit", (req, res) => {
    getAllProducts().then(productArr => {
      const formData = productArr.filter(
        obj => obj.product_sku === Number(req.params.id)
      )[0];
      console.log("formData: ", formData);
      return res.render("edit", {
        id: formData.product_sku,
        product: true,
        name: formData.product_name,
        price: formData.product_price,
        inventory: formData.product_inventory
      });
    });
  });

router.post("/products", (req, res) => {
  const { name, price, inventory } = req.body;
  addProduct(name, price, inventory).then(id => {
    return res.redirect(`/products/${id[0]}`);
  });
});

router.put("/products/:id/edit", (req, res) => {
  const { name, price, inventory } = req.body;
  const id = req.params.id;
  updateProduct(id, name, price, inventory).then(sku => {
    return res.redirect(`/products/${sku}`);
  });
});

router.delete("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  deleteProduct(id).then(() => {
    return res.redirect("/products");
  });
});
