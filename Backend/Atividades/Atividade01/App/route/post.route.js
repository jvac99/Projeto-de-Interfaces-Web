const controller = require("../controller/post.controller");

module.exports = (app) => {
  app.post("/post", controller.inserirPost);
  app.get("/posts", controller.listarPosts);
  app.get("/post/:id", controller.obterPost);
  app.delete("/post/:id", controller.removerPost);
};
