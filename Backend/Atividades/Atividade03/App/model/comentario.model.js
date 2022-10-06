const mongoose = require("mongoose");

module.exports = (() => {
  let schema = mongoose.Schema({
    texto: {
      type: String,
      required: true,
    },
    id_post: {
      type: mongoose.Schema.ObjectId,
      ref: "Post",
      required: true,
    },
    id_usuario: {
      type: mongoose.Schema.ObjectId,
      ref: "Usuario",
      required: true,
    },
  });
  return mongoose.model("Comentario", schema);
})();
