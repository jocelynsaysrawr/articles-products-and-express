const knex = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "articles_products_user",
    password: "password",
    database: "articles_products_db"
  }
});

const getAllArticles = () => {
  return knex
    .select()
    .from("article")
    .then(data => {
      return data;
    });
};

const getArticleByTitle = title => {
  return knex
    .select()
    .from("article")
    .where({
      article_title: title
    })
    .then(article => {
      return article[0];
    });
};

const addArticle = (title, content, author) => {
  return knex("article").insert({
    article_title: title,
    article_content: content,
    article_author: author
  });
};

module.exports = {
  getAllArticles,
  addArticle,
  getArticleByTitle
};
