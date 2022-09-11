const Aluno = require("../models/alunos");

module.exports.inserirAluno = (req, res) => {
  let promise = Aluno.create(req.body);

  promise
    .then((aluno) => {
      res.status(200).json(aluno);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};
