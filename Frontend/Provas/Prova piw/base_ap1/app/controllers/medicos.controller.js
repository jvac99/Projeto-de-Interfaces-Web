const Medico = require("../models/medicos.model");
const Consulta = require("../models/consultas.model");

module.exports.addMedicos = (req, res) => {
  Medico.create(req.body)
    .then((medico) => {
      res.status(201).json(medico);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

module.exports.obterConsultasPorMedico = (req, res) => {
  Consulta.find({ mid: req.params.id })
    .exec()
    .then((consultas) => {
      res.status(200).json(consultas);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
