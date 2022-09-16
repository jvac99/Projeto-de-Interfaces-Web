// Config/express

// Importando
const express = require("express");
const route_aluno = require("../App/route/aluno.route");

module.exports = () => {
  let app = express();
  app.set("port", 3000);
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  route_aluno(app);
  return app;
};
