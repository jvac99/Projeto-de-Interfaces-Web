const controller = require("../controllers/medicos.controller");

module.exports = (app) => {
  app.post("/medicos", controller.addMedicos);
  app.get("/medicos/:id/consultas", controller.obterConsultasPorMedico);
};
