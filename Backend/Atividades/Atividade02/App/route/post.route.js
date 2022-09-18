const controller = require("../controller/post.controller");

module.exports = (app) => {
  app.post("/posts", controller.inserirPost);
  app.get("/posts", controller.listarPosts);
  app.get("/posts/:id", controller.obterPost);
  app.get("/usuarios/:id/posts", controller.obterPostsPorUsuario);
  app.delete("/posts/:id", controller.removerPost);
};
