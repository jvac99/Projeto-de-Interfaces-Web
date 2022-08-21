// Config/express

// Importando
const express = require("express");

module.exports = () => {
  let app = express();
  app.set("port", 3000);
  app.use(express.static('./public'))
  return app;
};
