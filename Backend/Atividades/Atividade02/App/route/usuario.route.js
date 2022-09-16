const controller = require("../controller/usuario.controller");

module.exports = (app) => {
  app.post("/usuario", controller.inserirUsuario);
  app.get("/usuarios", controller.listarUsuarios);
  app.get("/usuario/:id", controller.obterUsuario);
  app.delete("/usuario/:id", controller.removerUsuario);
};
