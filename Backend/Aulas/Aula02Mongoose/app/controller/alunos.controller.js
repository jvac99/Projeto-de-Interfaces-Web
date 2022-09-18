const Aluno = require("../model/aluno.model");
const view_aluno = require("../view/aluno.view");

module.exports.obterAlunos = function (req, res) {
  let promise = Aluno.find().exec();
  promise
    .then(function (alunos) {
      res.status(200).json(view_aluno.renderMany(alunos));
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
};

module.exports.obterAluno = function (req, res) {
  let id = req.params.id;
  let promise = Aluno.findById(id).exec();
  promise
    .then(function (aluno) {
      res.status(200).json(view_aluno.render(aluno));
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
};

module.exports.inserirAluno = function (req, res) {
  let aluno = req.body;
  console.log(aluno);
  let promise = Aluno.create(aluno);
  promise
    .then(function (aluno_) {
      res.status(201).json(view_aluno.render(aluno_));
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
};

module.exports.obterMatriculasDeAluno = function (req, res) {};
