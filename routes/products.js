const express = require("express");
const router = express.Router();

module.exports = router;

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
