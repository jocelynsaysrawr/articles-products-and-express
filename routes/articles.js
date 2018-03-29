const express = require("express");
const router = express.Router();

module.exports = router;

router
  .get("/", (req, res) => {
    return res.render("index");
  })
  .get("/articles", (req, res) => {
    return res.render("allArticles");
  })
  .get("/articles/new", (req, res) => {
    return res.render("new");
  })
  .get("/articles/:title", (req, res) => {
    return res.render("article");
  })
  .get("/articles/:title/edit", (req, res) => {
    return res.render("edit");
  });
