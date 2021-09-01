const express = require("express");
const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 8080;

express()
  .use(cors())
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", (req, res) => res.render("pages/index"))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
