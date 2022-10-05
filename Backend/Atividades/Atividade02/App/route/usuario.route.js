const controller = require("../controller/usuario.controller");
let auth = require("../controller/auth.controller");

module.exports = (app) => {
  app.post("/usuarios/logar", controller.logar);
  app.post("/usuarios", controller.inserirUsuario);
  app.use("/usuarios/", auth.checar);
  app.get("/usuarios", controller.listarUsuarios);
  app.get("/usuarios/:id", controller.obterUsuario);
  app.delete("/usuarios/:id", controller.removerUsuario);
};
