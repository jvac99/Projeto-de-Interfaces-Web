const express = require("express");
const routeUsuario = require("../App/route/usuario.route");
const routePost = require("../App/route/post.route");
const routeComentario = require("../App/route/comentario.route");

module.exports = () => {
  let app = express();
  app.set("port", 3000);
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  routeUsuario(app);
  routePost(app);
  routeComentario(app);
  return app;
};
