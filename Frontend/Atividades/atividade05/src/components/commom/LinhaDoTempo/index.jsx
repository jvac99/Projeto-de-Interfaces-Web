import Post from "../Post";
import "./styles.css";

const LinhaDoTempo = () => {
  let infoPost = [
    {
      id: 1,
      nome: "Joao",
      texto: "Menino, tá quente demais hoje",
      qtdLikes: 1,
      comentarios: [
        {
          id: 1,
          texto: "Nem me diga",
          usuario: {
            id: 1,
            nome: "Robson",
          },
        },
        {
          id: 2,
          texto: "Num aguento mais essa quintura",
          usuario: {
            id: 2,
            nome: "Luana",
          },
        },
      ],
    },
    {
      id: 2,
      nome: "Tiago",
      texto: "Num aguento mais essa quintura",
      qtdLikes: 3,
      comentarios: [
        {
          id: 1,
          texto: "Nem me diga",
          usuario: {
            id: 1,
            nome: "José da Silva",
          },
        },
      ],
    },
  ];

  return (
    <div className="posts">
      {infoPost.map(({ id, nome, texto, qtdLikes, comentarios }) => (
        <Post
          nome={nome}
          mensagem={texto}
          qtdLikes={qtdLikes}
          key={id}
          comentarios={comentarios}
        />
      ))}
    </div>
  );
};

export default LinhaDoTempo;
