const express = require("express");
const router = express.Router();
const {
  getAllArticles,
  addArticle,
  getArticleByTitle,
  updateArticle,
  deleteArticle
} = require("../db/DS_articles");

module.exports = router;

router
  .get("/", (req, res) => {
    return res.render("index");
  })
  .get("/articles", (req, res) => {
    getAllArticles().then(allArticles => {
      return res.render("allArticles", { allArticles });
    });
  })
  .get("/articles/new", (req, res) => {
    return res.render("new", {
      article: true
    });
  })
  .get("/articles/:title", (req, res) => {
    getArticleByTitle(req.params.title).then(article => {
      return res.render("article", {
        title: article.article_title,
        content: article.article_content,
        author: article.article_author
      });
    });
  })
  .get("/articles/:title/edit", (req, res) => {
    getArticleByTitle(req.params.title).then(article => {
      return res.render("edit", {
        article: true,
        title: article.article_title,
        content: article.article_content,
        author: article.article_author
      });
    });
  });

router.post("/articles", (req, res) => {
  const { title, content, author } = req.body;
  addArticle(title, content, author).then(() => {
    return res.redirect(`/articles/${title}`);
  });
});

router.put("/articles/:title/edit", (req, res) => {
  const { title, content, author } = req.body;
  getArticleByTitle(req.params.title).then(article => {
    updateArticle(article.article_id, title, content, author).then(() => {
      return res.redirect(`/articles/${title}`);
    });
  });
});

router.delete("/articles/:title", (req, res) => {
  const title = req.params.title;
  deleteArticle(title).then(() => {
    return res.redirect("/articles");
  });
});
