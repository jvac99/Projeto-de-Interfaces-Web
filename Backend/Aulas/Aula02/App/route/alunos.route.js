const controller = require("../controller/alunos.controller");

module.exports = (app) => {
  app.get("/alunos", controller.obterAlunos);
};
