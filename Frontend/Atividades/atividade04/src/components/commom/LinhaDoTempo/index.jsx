import Post from "../Post";
import "./styles.css";

const LinhaDoTempo = () => {
  let infoPost = [
    {
      id: 1,
      nome: "Joao",
      texto: "Menino, tá quente demais hoje",
      qtdLikes: 1,
    },
    {
      id: 2,
      nome: "Tiago",
      texto: "Num aguento mais essa quintura",
      qtdLikes: 3,
    },
  ];
  return (
    <div className="posts">
      {infoPost.map(({ id, nome, texto, qtdLikes }) => {
        return (
          <Post nome={nome} mensagem={texto} qtdLikes={qtdLikes} key={id} />
        );
      })}
    </div>
  );
};

export default LinhaDoTempo;
