const usuario_view = require("./usuario.view");
const post_view = require("./post.view");

const render = (comentario) => {
  const { _id, texto, id_post, id_usuario } = comentario;
  return {
    id: _id,
    texto: texto,
    post: post_view.renderPost({ _id: id_post }),
    usuario: usuario_view.render(id_usuario),
  };
};

const renderMany = (comentarios) => {
  return comentarios.map(render);
};

module.exports.render = render;
module.exports.renderMany = renderMany;
