import { useContext, useEffect, useState } from "react";
import { fetchPosts } from "../../../api/posts.api";
import { authContext } from "../../../Routes";
import Post from "../Post";
import "./styles.css";

const LinhaDoTempo = () => {
  let [posts, setPosts] = useState([]);
  let auth = useContext(authContext);

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
      {posts.map(({ id, texto, likes, usuario }) => (
        <Post
          id_post={id}
          id_usuario={usuario.id}
          mensagem={texto}
          likes={likes}
          key={id}
        />
      ))}
    </div>
  );
};

export default LinhaDoTempo;
