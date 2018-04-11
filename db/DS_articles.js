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

module.exports = {
  getAllArticles
};
