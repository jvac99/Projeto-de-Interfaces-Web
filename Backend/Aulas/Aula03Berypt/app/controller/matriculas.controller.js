const Matricula = require("../model/matricula.model");
const view_matricula = require("../view/matricula.view");

module.exports.inserirMatricula = function (req, res) {
  let matricula = req.body;
  let promise = Matricula.create(matricula);
  console.log(matricula);
  promise
    .then(function (matricula_) {
      res.status(201).json(view_matricula.render(matricula_));
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
};

module.exports.obterMatriculas = function (req, res) {
  let promise = Matricula.find()
    .populate("disciplina")
    .populate("aluno")
    .exec();
  promise
    .then(function (matriculas) {
      res.status(200).json(view_matricula.renderMany(matriculas));
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
};
