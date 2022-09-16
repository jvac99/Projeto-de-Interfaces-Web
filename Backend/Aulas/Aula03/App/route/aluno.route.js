const controller = require("../controller/aluno.controller");

module.exports = (app) => {
  app.post("/aluno", controller.inserirAluno);
  app.get("/alunos", controller.listarAlunos);
};
