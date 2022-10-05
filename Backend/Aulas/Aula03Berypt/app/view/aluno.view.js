// aluno {
	// 	"_id": "631b82508fa3ad3bd4668888",
	// 	"nome": "Goku",
	// 	"matricula": "3672837",
	// 	"__v": 0
// }
function render (aluno){
    return {
        id: aluno._id,
        nome: aluno.nome,
        matricula: aluno.matricula
    }
}

module.exports.render = render

module.exports.renderMany = function(alunos){
    return alunos.map(render);
}