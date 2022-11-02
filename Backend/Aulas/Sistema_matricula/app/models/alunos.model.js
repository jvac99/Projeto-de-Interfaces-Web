const mongoose = require("mongoose");

module.exports = (() => {
  let Schema = mongoose.Schema({
    nome: {
      type: "string",
      required: true,
    },
    maticula: {
      type: "string",
      required: true,
    },
    senha: {
      type: "string",
      required: true,
    },
  });
  return mongoose.model("Aluno", Schema);
})();
