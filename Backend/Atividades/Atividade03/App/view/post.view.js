const usuario_view = require("./usuario.view");

const render = ({ _id, texto, likes, id_usuario }) => {
  return {
    id: _id,
    texto: texto,
    likes: likes,
    usuario: usuario_view.render(id_usuario),
  };
};

const renderPost = ({ _id, texto, likes }) => {
  return {
    id: _id,
    texto: texto,
    likes: likes,
  };
};

const renderMany = (posts) => {
  return posts.map(render);
};

module.exports.render = render;
module.exports.renderPost = renderPost;
module.exports.renderMany = renderMany;
