const mongoose = require("mongoose");

module.exports = (() => {
  let schema = mongoose.Schema({
    nome: {
      type: String,
      required: true,
    },
    crm: {
      type: String,
      required: true,
    },
  });
  return mongoose.model("Medico", schema);
})();
