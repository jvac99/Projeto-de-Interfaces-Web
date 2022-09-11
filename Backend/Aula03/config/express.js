// Config/express

// Importando
const express = require("express");
const route_aluno = require("../App/route/alunos.route");

module.exports = () => {
  let app = express();
  app.set("port", 3000);
  route_aluno(app);
  app.use(express.static("./public"));
  return app;
};
