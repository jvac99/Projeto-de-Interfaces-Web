const mongoose = require("mongoose");

module.exports = (() => {
  let schema = mongoose.Schema({
    nome: {
      type: String,
      required: true,
    },
    matricula: {
      type: String,
      required: true,
    },
  });
  return mongoose.model("Aluno", schema);
})();
