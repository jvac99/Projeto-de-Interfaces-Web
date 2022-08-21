const controller = require("../controller/posts.controller");

module.exports = (app) => {
  app.post("/posts", controller.inserirPost);
  app.get("/posts", controller.listarPosts);
  app.get("/post/:id", controller.obterPost);
  app.delete("/post/:id", controller.removerPost);
};
