const controller = require("../controller/matriculas.controller");

module.exports = function (app) {
  app.post("/matriculas", controller.inserirMatricula);
  app.get("/matriculas", controller.obterMatriculas);
};
