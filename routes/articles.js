const express = require("express");
const router = express.Router();
const { ArticleList } = require("../helpers/articles");

const newArticleList = new ArticleList();
const allArticles = newArticleList.getAllArticles();

module.exports = router;

router
  .get("/", (req, res) => {
    return res.render("index");
  })
  .get("/articles", (req, res) => {
    return res.render("allArticles", { allArticles });
  })
  .get("/articles/new", (req, res) => {
    return res.render("new", {
      article: true
    });
  })
  .get("/articles/:title", (req, res) => {
    const bodyData = allArticles.filter(obj => obj.title === req.params.title);
    return res.render("article", {
      title: bodyData[0].title,
      content: bodyData[0].content,
      author: bodyData[0].author
    });
  })
  .get("/articles/:title/edit", (req, res) => {
    const formData = allArticles.filter(obj => obj.title === req.params.title);
    return res.render("edit", {
      article: true,
      title: formData[0].title,
      content: formData[0].content,
      author: formData[0].author
    });
  });

router.post("/articles", (req, res) => {
  const { title, content, author } = req.body;
  newArticleList.addArticle(title, content, author);
  return res.redirect(`/articles/${title}`);
});

router.put("/articles/:title/edit", (req, res) => {
  const { title, content, author } = req.body;
  newArticleList.updateArticle(title, content, author);
  return res.redirect(`/articles/${title}`);
});
