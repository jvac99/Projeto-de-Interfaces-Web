const express = require("express");
const routes_aluno = require("../app/route/alunos.route");
const router_matriculas = require("../app/route/matriculas.route");
const router_disciplinas = require("../app/route/disciplina.route");

module.exports = function(){
    let app = express();
    app.set("port", 3000);
    app.use(express.json());
    app.use(express.urlencoded({ extended: false })); 
    routes_aluno(app);
    router_matriculas(app);
    router_disciplinas(app);
    app.use(express.static("./public"))
    return app;
}