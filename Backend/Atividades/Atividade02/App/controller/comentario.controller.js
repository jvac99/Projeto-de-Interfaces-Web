const Comentario = require("../model/comentario.model");
const comentario_view = require("../view/comentario.view");

module.exports.inserirComentario = (req, res) => {
  let promise = Comentario.create(req.body);

  promise
    .then((comentario) => {
      res.status(201).json(comentario_view.render(comentario));
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.listarComentarios = (req, res) => {
  let promise = Comentario.find().exec();
  console.log(promise);

  promise
    .then((comentarios) => {
      res.status(200).json(comentario_view.renderMany(comentarios));
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
      res.status(200).json(comentario_view.render(comentario));
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

module.exports.obterComentariosPorPost = (req, res) => {
  let id_post = req.params.id;
  let promise = Comentario.find({ id_post: id_post }).exec();

  promise
    .then((comentarios) => {
      res.status(200).json(comentario_view.renderMany(comentarios));
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

module.exports.removerComentario = (req, res) => {
  let id = req.params.id;
  let promise = Comentario.findByIdAndDelete(id).exec();

  promise
    .then((comentario) => {
      res.status(200).json(comentario_view.render(comentario));
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};
