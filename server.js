const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const handlebars = exphbs.create({
  defaultLayout: "main",
  extname: ".hbs"
});

const PORT = process.env.PORT || 8080;

app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
