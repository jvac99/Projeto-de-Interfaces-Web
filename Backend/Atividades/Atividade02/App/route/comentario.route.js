const controller = require("../controller/comentario.controller");

module.exports = (app) => {
  app.post("/comentario", controller.inserirComentario);
  app.get("/comentarios", controller.listarComentarios);
  app.get("/comentario/:id", controller.obterComentario);
  app.get("/comentarios/post/:id", controller.obterComentariosPost);
  app.delete("/comentario/:id", controller.removerComentario);
};
