const Usuario = require("../model/usuario.model");
const usuario_view = require("../view/usuario.view");

module.exports.inserirUsuario = (req, res) => {
  let promise = Usuario.create(req.body);

  promise
    .then((usuario) => {
      res.status(201).json(usuario_view.render(usuario));
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.listarUsuarios = (req, res) => {
  let promise = Usuario.find().exec();

  promise
    .then((usuarios) => {
      res.status(200).json(usuario_view.renderMany(usuarios));
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
      res.status(200).json(usuario_view.render(usuario));
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

module.exports.removerUsuario = (req, res) => {
  let id = req.params.id;
  let promise = Usuario.findByIdAndDelete(id).exec();

  promise
    .then((usuario) => {
      res.status(200).json(usuario_view.render(usuario));
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};
