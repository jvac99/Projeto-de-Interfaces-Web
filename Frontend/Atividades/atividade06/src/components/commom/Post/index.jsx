import { useContext, useState, useEffect } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useForm } from "react-hook-form";
import {
  criarComentario,
  fetchComentariosPorPost,
} from "../../../api/comentarios.api";
import { authContext } from "../../../Routes";
import Comentario from "../Comentario";
import "./styles.css";
import { fetchusuario } from "../../../api/usuarios.api";

const Post = ({ id_post, id_usuario, mensagem, likes }) => {
  const [nome, setNome] = useState();
  const [comentarios, setComentarios] = useState([]);
  const [like, setLike] = useState(likes);
  const [inputValue, setInputValue] = useState("");
  let { register, handleSubmit } = useForm();
  let auth = useContext(authContext);

  useEffect(() => {
    fetchComentariosPorPost(auth.token, id_post)
      .then((response) => {
        setComentarios(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    fetchusuario(auth.token, id_usuario)
      .then((response) => {
        setNome(response.data.nome);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [textBtlike, setTextBtLike] = useState(
    <FcLikePlaceholder className="imgLike" />
  );

  const onclickBtLike = () => {
    if (likes == like) {
      setLike(likes + 1);
      setTextBtLike(<FcLike className="imgLike" />);
    } else {
      setLike(likes);
      setTextBtLike(<FcLikePlaceholder className="imgLike" />);
    }
  };

  const handleUserInput = (e) => {
    setInputValue(e.target.value);
  };

  const tratarSubmit = (data) => {
    criarComentario(data.texto, id_post, auth.token).then(({ data }) => {
      setComentarios((current) => [...current, data]);
      setInputValue("");
    });
  };

  return (
    <div className="container-posts">
      <div className="card-post">
        <h1>{nome}</h1>
        <p>{mensagem}</p>
        <div className="likes-post">
          <h3 className="likes-post">{like} likes</h3>
          <button className="button-post" onClick={onclickBtLike}>
            {textBtlike}
          </button>
        </div>
      </div>

      <div>
        {comentarios.map(({ id, usuario, texto }) => (
          <Comentario id_usuario={usuario.id} mensagem={texto} key={id} />
        ))}
      </div>

      <div>
        <div className="content">
          <section className="form">
            <form onSubmit={handleSubmit(tratarSubmit)}>
              <textarea
                rows="5"
                cols="33"
                placeholder="Adicionar comentário"
                {...register("texto")}
                value={inputValue}
                onChange={handleUserInput}
              />
              <input type="submit" value="Adicionar" className="button" />
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Post;
