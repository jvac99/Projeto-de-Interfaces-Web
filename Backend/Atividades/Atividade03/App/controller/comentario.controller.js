const jwt = require("jsonwebtoken");
const Comentario = require("../model/comentario.model");
const comentario_view = require("../view/comentario.view");

module.exports.inserirComentario = (req, res) => {
  let token = req.headers.token;
  let payload = jwt.decode(token);
  let id_usuario_token = payload.id;
  let comentario = req.body;
  comentario.id_usuario = id_usuario_token;
  let promise = Comentario.create(comentario);

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
  let promise = Comentario.findById(id).exec();

  let token = req.headers.token;
  let payload = jwt.decode(token);
  let id_usuario_token = payload.id;

  promise
    .then((comentario) => {
      if (id_usuario_token == comentario.id_usuario) {
        Comentario.deleteOne({ _id: id })
          .exec()
          .then(() => {
            res.status(200).json(comentario_view.render(comentario));
          })
          .catch((err) => {
            res.status(404).json(err);
          });
      } else {
        res.status(404).json("Não autenticado");
      }
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};
