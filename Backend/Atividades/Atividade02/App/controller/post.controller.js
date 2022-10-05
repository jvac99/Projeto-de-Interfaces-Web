const Post = require("../model/post.model");
const post_view = require("../view/post.view");

module.exports.inserirPost = (req, res) => {
  let token = req.headers.token;
  let payload = jwt.decode(token);
  let id_usuario_token = payload.id;
  let val = req.body;

  let post = {
    val,
    id_usuario: id_usuario_token,
  };

  let promise = Post.create(post);

  promise
    .then((post) => {
      res.status(201).json(post_view.render(post));
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.listarPosts = (req, res) => {
  let promise = Post.find().exec();

  promise
    .then((posts) => {
      res.status(200).json(post_view.renderMany(posts));
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
      res.status(200).json(post_view.render(post));
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

module.exports.obterPostsPorUsuario = (req, res) => {
  let id_usuario = req.params.id;
  let promise = Post.find({ id_usuario: id_usuario }).exec();

  promise
    .then((post) => {
      res.status(200).json(post_view.renderMany(post));
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

module.exports.removerPost = (req, res) => {
  let id = req.params.id;
  let promise = Post.findByIdAndDelete(id).exec();

  let token = req.headers.token;
  let payload = jwt.decode(token);
  let id_usuario_token = payload.id;

  promise
    .then((post) => {
      if (id_usuario_token === post.id_usuario) {
        res.status(200).json(post_view.render(post));
      }
      res.status(404).json("Error");
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};
