const { host, user, password, database } = require("../knexLogin");
const knex = require("knex")({
  client: "pg",
  connection: {
    host: host,
    user: user,
    password: password,
    database: database
  }
});

const getAllProducts = () => {
  return knex
    .raw("SELECT * FROM product ORDER BY product_id ASC")
    .then(data => {
      return data.rows;
    });
};

const addProduct = (name, price, inventory) => {
  return knex("product")
    .returning("product_sku")
    .insert({
      product_name: name,
      product_price: Number(price),
      product_inventory: Number(inventory)
    });
};

const updateProduct = (id, name, price, inventory) => {
  return knex("product")
    .where("product_sku", "=", id)
    .update(
      {
        product_name: name,
        product_price: Number(price),
        product_inventory: Number(inventory)
      },
      "product_sku"
    )
    .then(sku => {
      return sku[0];
    });
};

const deleteProduct = id => {
  return knex("product")
    .where("product_sku", "=", id)
    .del();
};

module.exports = {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct
};
