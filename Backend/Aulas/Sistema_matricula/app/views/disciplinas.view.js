const render = ({ _id, ...rest }) => {
  return {
    id: _id,
    ...rest,
  };
};

module.exports.render = render;

module.exports.renderMany = (disciplina) => {
  return disciplina.map(render);
};
