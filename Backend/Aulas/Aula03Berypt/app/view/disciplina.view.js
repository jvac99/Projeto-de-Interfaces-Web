
// {
//     _id: ObjectId("632228f5f7851536c86107ce"),
//     nome: 'PIW',
//     codigo: 'QXD203',
//     __v: 0
//   },

function render(disciplina){
    return {
        id: disciplina._id,
        nome: disciplina.nome,
        codigo: disciplina.codigo
    }
}

module.exports.render = render;