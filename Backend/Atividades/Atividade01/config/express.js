// Importando
const express = require("express");
const usuariosRouter = require("../App/route/usuario.route");
const postsRouter = require("../App/route/post.route");

module.exports = () => {
  let app = express();
  app.set("port", 3000);
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  usuariosRouter(app);
  postsRouter(app);
  return app;
};
