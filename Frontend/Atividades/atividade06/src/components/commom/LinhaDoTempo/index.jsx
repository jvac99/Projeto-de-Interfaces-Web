import { useContext, useEffect, useState } from "react";
import { fetchPosts } from "../../../api/posts.api";
import { authContext } from "../../../Routes";
import Post from "../Post";
import "./styles.css";

const LinhaDoTempo = () => {
  let [posts, setPosts] = useState([]);
  let auth = useContext(authContext);

  // let infoPost = [
  //   {
  //     id: 1,
  //     nome: "Joao",
  //     texto: "Menino, tá quente demais hoje",
  //     qtdLikes: 1,
  //     comentarios: [
  //       {
  //         id: 1,
  //         texto: "Nem me diga",
  //         usuario: {
  //           id: 1,
  //           nome: "Robson",
  //         },
  //       },
  //       {
  //         id: 2,
  //         texto: "Num aguento mais essa quintura",
  //         usuario: {
  //           id: 2,
  //           nome: "Luana",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     nome: "Tiago",
  //     texto: "Num aguento mais essa quintura",
  //     qtdLikes: 3,
  //     comentarios: [
  //       {
  //         id: 1,
  //         texto: "Nem me diga",
  //         usuario: {
  //           id: 1,
  //           nome: "José da Silva",
  //         },
  //       },
  //     ],
  //   },
  // ];

  useEffect(() => {
    fetchPosts(auth.token)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="posts">
      {posts.map(({ id, texto, likes }) => (
        <Post
          nome={"teste"}
          mensagem={texto}
          qtdLikes={likes}
          key={id}
          comentarios={[
            {
              id: 1,
              texto: "Nem me diga",
              usuario: {
                id: 1,
                nome: "José da Silva",
              },
            },
          ]}
        />
      ))}
    </div>
  );
};

export default LinhaDoTempo;
