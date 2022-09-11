const controller = require("../controller/alunos.controller");

module.exports = (app) => {
  app.post("/alunos", controller.inserirAluno);
  app.get("/alunos", controller.listarAlunos);
};
