const render = ({ _id, ...rest }) => {
  return {
    id: _id,
    ...rest,
  };
};

module.exports.render = render;

module.exports.renderMany = (alunos) => {
  return alunos.map(render);
};
