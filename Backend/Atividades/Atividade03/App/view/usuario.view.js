const render = ({ _id, nome, email }) => {
  return {
    id: _id,
    nome: nome,
    email: email,
  };
};

const renderComSenha = ({ _id, nome, email, senha }) => {
  return {
    id: _id,
    nome: nome,
    email: email,
    senha: senha,
  };
};

const renderMany = (usuarios) => {
  return usuarios.map(render);
};

module.exports.render = render;
module.exports.renderComSenha = renderComSenha;
module.exports.renderMany = renderMany;
