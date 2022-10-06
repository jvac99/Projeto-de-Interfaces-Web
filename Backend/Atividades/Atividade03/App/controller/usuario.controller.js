const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Usuario = require("../model/usuario.model");
const usuario_view = require("../view/usuario.view");

module.exports.inserirUsuario = (req, res) => {
  const { senha, ...rest } = req.body;

  let usuario = new Usuario({
    ...rest,
    senha: bcrypt.hashSync(senha, 10),
  });

  let promise = Usuario.create(usuario);

  promise
    .then((usuario) => {
      res.status(201).json(usuario_view.render(usuario));
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.logar = (req, res) => {
  const { email, senha } = req.body;

  let promise = Usuario.findOne({ email: email });

  promise
    .then((usuario) => {
      if (bcrypt.compareSync(senha, usuario.senha)) {
        let token = jwt.sign({ id: usuario._id }, "secret");
        res.status(200).json({
          message: "Logado",
          token: token,
        });
      } else {
        res.status(401).json("Login Falhou!");
      }
    })
    .catch((error) => {
      res.status(401).json("Login Falhou!");
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
  let token = req.headers.token;
  let payload = jwt.decode(token);
  let id_token = payload.id;
  let id = req.params.id;
  console.log(payload);
  if (id_token === id) {
    let promise = Usuario.findByIdAndDelete(id).exec();

    promise
      .then((usuario) => {
        res.status(200).json(usuario_view.render(usuario));
      })
      .catch((err) => {
        res.status(404).json(err);
      });
  } else {
    res.status(401).json("Falhou!");
  }
};
