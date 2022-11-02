const controller = require("../controllers/consultas.controller");

module.exports = (app) => {
  app.post("/consultas", controller.addConsultas);
  app.get("/consultas", controller.obterConsultas);
};
