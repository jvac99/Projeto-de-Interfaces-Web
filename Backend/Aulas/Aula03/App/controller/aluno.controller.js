const Aluno = require("../model/aluno.model");

module.exports.inserirAluno = (req, res) => {
  console.log(req.body);
  let promise = Aluno.create(req.body);

  promise
    .then((aluno) => {
      res.status(201).json(aluno);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

module.exports.listarAlunos = (req, res) => {
  let promise = Aluno.find().exec();

  promise
    .then((alunos) => {
      res.status(200).json(alunos);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};
