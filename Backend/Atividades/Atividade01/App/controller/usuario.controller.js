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
  let novoUsuario = req.body;
  let validacao = usuarios.some((usuario) => usuario.id == novoUsuario.id);
  if (validacao) {
    res.status(422).send("Usuario já existente.");
    return;
  }
  usuarios.push(novoUsuario);
  res.status(200).send(novoUsuario);
};

module.exports.listarUsuarios = (req, res) => {
  res.json(usuarios);
};

module.exports.obterUsuario = (req, res) => {
  let id = req.params.id;
  let usuario = usuarios.find((usuario) => usuario.id == id);

  if (usuario === null) {
    res.status(400).send("Usuário não encontrado.");
    return;
  }
  res.json(usuario);
};

module.exports.removerUsuario = (req, res) => {
  let id = req.params.id;
  let newUsuarios = usuarios.filter((usuario) => usuario.id != id);
  if (newUsuarios.length === usuarios.length) {
    res.status(400).send("Usuário não encontrado.");
    return;
  }
  usuarios = newUsuarios;
  res.status(200).send(id);
};
