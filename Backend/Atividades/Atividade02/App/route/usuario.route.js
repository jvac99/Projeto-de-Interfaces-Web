const controller = require("../controller/usuario.controller");

module.exports = (app) => {
  app.post("/usuarios", controller.inserirUsuario);
  app.get("/usuarios", controller.listarUsuarios);
  app.get("/usuarios/:id", controller.obterUsuario);
  app.delete("/usuarios/:id", controller.removerUsuario);
};
