const mongoose = require("mongoose");

module.exports = (() => {
  let schema = mongoose.Schema({
    texto: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      required: true,
    },
    id_usuario: {
      type: mongoose.Schema.ObjectId,
      ref: "Usuario",
      required: true,
    },
  });
  return mongoose.model("Post", schema);
})();
