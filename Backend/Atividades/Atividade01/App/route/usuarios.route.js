const controller = require("../controller/usuarios.controller");

module.exports = (app) => {
  app.post("/usuarios", controller.inserirUsuario);
  app.get("/usuarios", controller.listarUsuarios);
  app.get("/usuario/:id", controller.obterUsuario);
  app.delete("/usuario/:id", controller.removerUsuario);
};
