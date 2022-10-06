const controller = require("../controller/post.controller");
const auth = require("../controller/auth.controller");

module.exports = (app) => {
  app.use("/posts/", auth.checar);
  app.post("/posts", controller.inserirPost);
  app.get("/posts", controller.listarPosts);
  app.get("/posts/:id", controller.obterPost);
  app.get("/usuarios/:id/posts", controller.obterPostsPorUsuario);
  app.delete("/posts/:id", controller.removerPost);
};
