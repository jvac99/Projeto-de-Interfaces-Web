const Consulta = require("../models/consultas.model");

module.exports.addConsultas = (req, res) => {
  Consulta.create(req.body)
    .then((consulta) => {
      res.status(201).json(consulta);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

module.exports.obterConsultas = (req, res) => {
  Consulta.find()
    .exec()
    .then((consultas) => {
      res.status(200).json(consultas);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
