const Post = require("../model/post.model");

module.exports.inserirPost = (req, res) => {
  let post = req.body;
  let promise = Post.create(post);

  promise
    .then((post) => {
      res.status(201).json(post);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.listarPosts = (req, res) => {
  let promise = Post.find().exec();

  promise
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.obterPost = (req, res) => {
  let id = req.params.id;
  let promise = Post.findById(id).exec();

  promise
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.obterPostsUsuario = (req, res) => {
  let id = req.params.id;
  let promise = Post.find({ id_usuario: id }).exec();

  promise
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.removerPost = (req, res) => {
  let id = req.params.id;
  let promise = Post.findOneAndDelete(id).exec();

  promise
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
