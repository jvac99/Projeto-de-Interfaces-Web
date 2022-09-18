const controller = require("../controller/comentario.controller");

module.exports = (app) => {
  app.post("/comentarios", controller.inserirComentario);
  app.get("/comentarios", controller.listarComentarios);
  app.get("/comentarios/:id", controller.obterComentario);
  app.get("/post/:id/comentarios", controller.obterComentariosPorPost);
  app.delete("/comentarios/:id", controller.removerComentario);
};
