const render = ({ _id, ...rest }) => {
  return {
    id: _id,
    ...rest,
  };
};

module.exports.render = render;

module.exports.renderMany = (matricula) => {
  return matricula.map(render);
};
