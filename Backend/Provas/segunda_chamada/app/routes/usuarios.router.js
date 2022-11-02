const controller = require("../controllers/usuarios.controller");

module.exports = (app) => {
  app.post("/usuarios", controller.addUsuarios);
  app.post("/usuarios/singin", controller.singin);
};
