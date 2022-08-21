let posts = [
  {
    id: 1,
    texto: "Oi, tudo bem?",
    likes: 6,
  },
  {
    id: 2,
    texto: "Tudo bom! E vc?",
    likes: 6,
  },
];

module.exports.inserirPost = (req, res) => {
  posts.push(req.body);
  res.status(200).send(req.body);
};

module.exports.listarPosts = (req, res) => {
  res.json(posts);
};

module.exports.obterPost = (req, res) => {
  var id = req.params.id;
  var post = posts.find((post) => post.id == id);

  if (post) {
    res.json(post);
  } else {
    res.status(404).send("Usuário não encontrado.");
  }
};

module.exports.removerPost = (req, res) => {
  var id = req.params.id;
  posts = posts.filter((post) => post.id != id);
  res.status(200).send(id);
};
