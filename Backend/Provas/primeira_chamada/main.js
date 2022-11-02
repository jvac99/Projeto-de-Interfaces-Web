const http = require("http");
const db = require("./config/db.js");
const modulo_express = require("./config/express.js");

let app = modulo_express.setup();

http.createServer(app).listen(app.get("port"), () => {
  console.log("Express Server escutando na porta " + app.get("port"));
});
db("mongodb://localhost/atendimento_medico");
