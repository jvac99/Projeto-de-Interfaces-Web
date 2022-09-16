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
  let novoPosts = req.body;
  let validacao = posts.some((post) => post.id == novoPosts.id);
  if (validacao) {
    res.status(422).send("Post já existente.");
    return;
  }
  posts.push(novoPosts);
  res.status(200).send(novoPosts);
};

module.exports.listarPosts = (req, res) => {
  res.status(200).json(posts);
};

module.exports.obterPost = (req, res) => {
  let id = req.params.id;
  let post = posts.find((post) => post.id == id);

  if (post === null) {
    res.status(400).send("Post não encontrado.");
    return;
  }
  res.status(201).json(post);
};

module.exports.removerPost = (req, res) => {
  let id = req.params.id;
  let newPosts = posts.filter((post) => post.id != id);
  if (newPosts.length === posts.length) {
    res.status(400).send("Post não encontrado.");
    return;
  }
  posts = newPosts;
  res.status(200).send(id);
};
