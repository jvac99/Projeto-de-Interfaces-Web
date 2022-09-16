const Comentario = require("../model/comentario.model");

module.exports.inserirComentario = (req, res) => {
  let promise = Comentario.create(req.body);

  promise
    .then((comentario) => {
      res.status(201).json(comentario);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.listarComentarios = (req, res) => {
  let promise = Comentario.find().exec();

  promise
    .then((comentarios) => {
      res.status(200).json(comentarios);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.obterComentario = (req, res) => {
  let id = req.params.id;
  let promise = Comentario.findById(id).exec();

  promise
    .then((comentario) => {
      res.status(200).json(comentario);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.obterComentariosPost = (req, res) => {
  let id = req.params.id;
  let promise = Comentario.find({ id_post: id }).exec();

  promise
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.removerComentario = (req, res) => {
  let id = req.params.id;
  let promise = Comentario.findOneAndDelete(id).exec();

  promise
    .then((comentario) => {
      res.status(200).json(comentario);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
