const mongoose = require("mongoose");

module.exports = (() => {
  let schema = mongoose.Schema({
    uid: {
      type: mongoose.Schema.ObjectId,
      ref: "Usuario",
      required: true,
    },
    mid: {
      type: mongoose.Schema.ObjectId,
      ref: "Medico",
      required: true,
    },
  });
  return mongoose.model("Consulta", schema);
})();
