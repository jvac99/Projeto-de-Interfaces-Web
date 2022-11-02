const controller = require("../controllers/alunos.controller");
module.exports = (app) => {
  app.post("/alunos", controller.inserirAluno);
  app.post("/alunos/logar", controller.logar);
  app.get("/alunos", controller.obterAlunos);
  app.get("/alunos/:id", controller.obterAluno);
  app.get("/alunos/:id/matriculas", controller.obterMatriculasDeAluno);
};
