// Config/express

// Importando
const express = require("express");
const usuariosRouter = require("../App/route/usuarios.route");
const postsRouter = require("../App/route/posts.route");

module.exports = () => {
  let app = express();
  app.set("port", 3000);
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  usuariosRouter(app);
  postsRouter(app);
  app.use(express.static("./public"));
  return app;
};
