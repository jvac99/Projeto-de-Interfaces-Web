const view_aluno = require("./aluno.view");
const view_disciplina = require("./disciplina.view");

// {
//     "_id": "63222a1b557a29111ce6c91a",
//     "aluno": {
//         "_id": "631b82508fa3ad3bd4668888",
//         "nome": "Goku",
//         "matricula": "3672837",
//         "__v": 0
//     },
//     "disciplina": {
//         "_id": "632228f5f7851536c86107ce",
//         "nome": "PIW",
//         "codigo": "QXD203",
//         "__v": 0
//     },
//     "__v": 0
// },

function render (matricula){
    return {
        id: matricula._id,
        aluno: view_aluno.render(matricula.aluno),
        disciplina: view_disciplina.render(matricula.disciplina)
    }
}

module.exports.render = render;

module.exports.renderMany = function(matriculas){
    return matriculas.map(render);
}