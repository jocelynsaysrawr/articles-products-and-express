const express = require("express");
const router = express.Router();
const {
  getAllArticles,
  addArticle,
  getArticleByTitle
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
    console.log(req.params);
    getArticleByTitle(req.params.title).then(article => {
      return res.render("article", {
        title: article.article_title,
        content: article.article_content,
        author: article.article_author
      });
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
  addArticle(title, content, author).then(() => {
    return res.redirect(`/articles/${title}`);
  });
});

router.put("/articles/:title/edit", (req, res) => {
  const { title, content, author } = req.body;
  newArticleList.updateArticle(title, content, author);
  return res.redirect(`/articles/${title}`);
});

router.delete("/articles/:title", (req, res) => {
  const title = req.params.title;
  newArticleList.deleteArticle(title);
  return res.redirect("/articles");
});
