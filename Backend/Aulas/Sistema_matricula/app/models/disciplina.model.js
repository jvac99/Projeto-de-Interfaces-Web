const mongoose = require("mongoose");

module.exports = (() => {
  let Schema = mongoose.Schema({
    nome: {
      type: "string",
      required: true,
    },
    codigo: {
      type: "string",
      required: true,
    },
  });
  return mongoose.model("Disciplina", Schema);
})();
