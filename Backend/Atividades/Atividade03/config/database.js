const mongoose = require("mongoose");

module.exports = (uri) => {
  let parametros = { useNewUrlParser: true, useUnifiedTopology: true };

  mongoose.connect(uri, parametros);

  mongoose.connection.on("connected", () => {
    console.log("Mongoose! Conectado em " + uri);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Mongoose! Desconectado de " + uri);
  });

  mongoose.connection.on("error", (erro) => {
    console.log("Mongoose! Erro na conexão: " + erro);
  });

  mongoose.set("debug", true);
};
