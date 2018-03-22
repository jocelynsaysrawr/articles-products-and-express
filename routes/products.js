const express = require("express");
const router = express.Router();

module.exports = router;

router.get("/", (req, res) => {
  return res.render("index");
});

router.get("/products/:id", (req, res) => {
  return res.render("product");
});

router.get("/products/:id/edit", (req, res) => {
  return res.render("edit");
});
