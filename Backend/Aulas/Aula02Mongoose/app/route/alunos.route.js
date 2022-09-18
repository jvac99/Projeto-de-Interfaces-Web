const controller = require("../controller/alunos.controller");

module.exports = function (app) {
  app.get("/alunos", controller.obterAlunos);
  app.get("/alunos/:id/matriculas", controller.obterMatriculasDeAluno);
  app.get("/alunos/:id", controller.obterAluno);
  app.post("/alunos", controller.inserirAluno);
};
