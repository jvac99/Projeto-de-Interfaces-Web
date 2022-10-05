const Aluno = require("../model/aluno.model");
const view_aluno = require("../view/aluno.view");
const bcrypt = require("bcrypt");

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
  const { nome, matricula, senha } = req.body;
  let aluno = new Aluno({
    nome: nome,
    matricula: matricula,
    senha: bcrypt.hashSync(senha, 10),
  });

  let promise = Aluno.create(aluno);

  promise
    .then(function (aluno_) {
      res.status(201).json(view_aluno.render(aluno_));
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
};

module.exports.logar = function (req, res) {
  const { matricula, senha } = req.body;

  let promise = Aluno.findOne({ matricula: matricula });

  promise
    .then(function (aluno) {
      if (bcrypt.compareSync(senha, aluno.senha)) {
        res.status(200).send("Login ok!");
      } else {
        res.status(401).json("Login Falhou!");
      }
    })
    .catch(function (error) {
      res.status(401).json("Login Falhou!");
    });
};

module.exports.obterMatriculasDeAluno = function (req, res) {};
