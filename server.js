const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const handlebars = exphbs.create({
  defaultLayout: "main",
  extname: ".hbs"
});
const products = require("./routes/products");
const Product = require("./helpers/prods");

const PORT = process.env.PORT || 8080;

app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");

app.use(products);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
