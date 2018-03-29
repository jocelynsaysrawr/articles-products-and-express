const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");
const handlebars = exphbs.create({
  defaultLayout: "main",
  extname: ".hbs"
});
const products = require("./routes/products");
const articles = require("./routes/articles");

const PORT = process.env.PORT || 8080;

app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  methodOverride((req, res) => {
    console.log("req.body: ", req.body);
    if (req.body && typeof req.body === "object" && "_method" in req.body) {
      console.log("method: ", req.body._method);
      const method = req.body._method;
      delete req.body._method;
      return method;
    }
  })
);
app.use(products);
app.use(articles);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
