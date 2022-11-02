const mongoose = require("mongoose");

module.exports = (() => {
  let schema = mongoose.Schema({
    nome: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    funcao: {
      type: Number,
      required: true,
    },
    senha: {
      type: String,
      required: true,
    },
  });
  return mongoose.model("Usuario", schema);
})();
