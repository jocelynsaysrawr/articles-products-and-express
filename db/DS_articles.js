const { host, user, password, database } = require("../knexLogin");
const knex = require("knex")({
  client: "pg",
  connection: {
    host: "18.188.11.23",
    user: user,
    password: password,
    database: database
  }
});

const getAllArticles = () => {
  return knex
    .select()
    .from("article")
    .orderBy("article_id", "asc")
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

const updateArticle = (id, title, content, author) => {
  return knex("article")
    .where("article_id", "=", id)
    .update({
      article_title: title,
      article_content: content,
      article_author: author
    });
};

const deleteArticle = title => {
  return knex("article")
    .where("article_title", "=", title)
    .del();
};

module.exports = {
  getAllArticles,
  addArticle,
  getArticleByTitle,
  updateArticle,
  deleteArticle
};
