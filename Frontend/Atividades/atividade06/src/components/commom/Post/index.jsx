import { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import Comentario from "../Comentario";
import "./styles.css";

const Post = ({ nome, mensagem, qtdLikes, comentarios }) => {
  const [like, setLike] = useState(qtdLikes);
  const [textBtlike, setTextBtLike] = useState(
    <FcLikePlaceholder className="imgLike" />
  );

  const onclickBtLike = () => {
    if (qtdLikes == like) {
      setLike(qtdLikes + 1);
      setTextBtLike(<FcLike className="imgLike" />);
    } else {
      setLike(qtdLikes);
      setTextBtLike(<FcLikePlaceholder className="imgLike" />);
    }
  };

  const navigate = useNavigate();

  return (
    <div className="container-posts">
      <div className="card-post">
        <h1 className="title-post">{nome}</h1>
        <p className="content-post">{mensagem}</p>
        <div className="likes-post">
          <h3 className="qtdLikes-post">{like} likes</h3>
          <button className="button-post" onClick={onclickBtLike}>
            {textBtlike}
          </button>
        </div>
      </div>

      <div className="comentarios-post">
        {comentarios.map(({ id, usuario, texto }) => (
          <Comentario nome={usuario.nome} mensagem={texto} key={id} />
        ))}

        <form className="form-comentario" onSubmit={() => navigate("/")}>
          <textarea
            rows="5"
            cols="33"
            placeholder="Adicionar comentário"
            className="add-comentario"
          />
          <input
            type="submit"
            value="Adicionar"
            className="add-comentario-button"
          />
        </form>
      </div>
    </div>
  );
};

export default Post;
