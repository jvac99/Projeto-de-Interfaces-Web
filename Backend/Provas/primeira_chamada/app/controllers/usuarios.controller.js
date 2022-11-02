const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Usuario = require("../models/usuarios.model");

module.exports.addUsuarios = (req, res) => {
  console.log("ola");
  const { senha, ...rest } = req.body;

  let usuario = new Usuario({
    senha: bcrypt.hashSync(senha, 10),
    ...rest,
  });

  Usuario.create(usuario)
    .then((usuario) => {
      res.status(201).json(usuario);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

module.exports.singin = (req, res) => {
  const { email, senha } = req.body;

  Usuario.findOne({ email: email })
    .exec()
    .then((usuario) => {
      if (!bcrypt.compareSync(senha, usuario.senha)) {
        res.status(401).send("Invalid login");
      } else {
        let token = jwt.sign({ id: usuario._id }, "secret");
        res.status(200).json({
          message: "Logado",
          token: token,
        });
      }
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
