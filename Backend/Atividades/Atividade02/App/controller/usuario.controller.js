const Usuario = require("../model/usuario.model");

module.exports.inserirUsuario = (req, res) => {
  let usuario = req.body;
  let promise = Usuario.create(usuario);

  promise
    .then((usuario) => {
      res.status(201).json(usuario);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.listarUsuarios = (req, res) => {
  let promise = Usuario.find().exec();

  promise
    .then((usuarios) => {
      res.status(200).json(usuarios);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.obterUsuario = (req, res) => {
  let id = req.params.id;
  let promise = Usuario.findById(id).exec();

  promise
    .then((usuario) => {
      res.status(200).json(usuario);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.removerUsuario = (req, res) => {
  let id = req.params.id;
  let promise = Usuario.findOneAndDelete(id).exec();

  promise
    .then((usuario) => {
      res.status(200).json(usuario);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
