const mongoose = require("mongoose");

module.exports = (() => {
  let Schema = mongoose.Schema({
    aluno: {
      type: mongoose.Schema.ObjectId,
      required: true,
    },
    disciplina: {
      type: mongoose.Schema.ObjectId,
      required: true,
    },
  });
  return mongoose.model("Aluno", Schema);
})();
