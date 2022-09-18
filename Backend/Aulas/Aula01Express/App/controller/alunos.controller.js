let alunos = [
  {
    id: 1,
    nome: "Maria",
  },
  {
    id: 2,
    nome: "Jose",
  },
  {
    id: 3,
    nome: "Joao",
  },
];

module.exports.obterAlunos = (req, res) => {
  res.json(alunos);
};
