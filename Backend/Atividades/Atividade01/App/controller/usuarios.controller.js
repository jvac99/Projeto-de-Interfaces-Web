let usuarios = [
  {
    id: 1,
    nome: "Victor",
    email: "victor.aefarias@gmail.com",
    senha: 123,
  },
  {
    id: 2,
    nome: "João",
    email: "joao@gmail.com",
    senha: 456,
  },
];

module.exports.inserirUsuario = (req, res) => {
  usuarios.push(req.body);
  res.status(200).send(req.body);
};

module.exports.listarUsuarios = (req, res) => {
  res.json(usuarios);
};

module.exports.obterUsuario = (req, res) => {
  var id = req.params.id;
  var usuario = usuarios.find((usuario) => usuario.id == id);

  if (usuario) {
    res.json(usuario);
  } else {
    res.status(404).send("Usuário não encontrado.");
  }
};

module.exports.removerUsuario = (req, res) => {
  var id = req.params.id;
  usuarios = usuarios.filter((usuario) => usuario.id != id);
  res.status(200).send(id);
};
