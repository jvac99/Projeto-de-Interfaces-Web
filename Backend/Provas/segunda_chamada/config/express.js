const express = require("express");
const routes_usuario = require("../app/routes/usuarios.router");
const routes_medico = require("../app/routes/medicos.router");
const routes_consulta = require("../app/routes/consultas.router");

module.exports.setup = () => {
  let app = express();
  app.set("port", 3000);
  app.use(express.static("./public"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  routes_usuario(app);
  routes_medico(app);
  routes_consulta(app);
  return app;
};
