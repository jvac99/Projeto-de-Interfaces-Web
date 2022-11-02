import { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import "./styles.css";

const Post = ({ nome, mensagem, qtdLikes }) => {
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

  return (
    <div className="card">
      <h1 className="title">{nome}</h1>
      <p className="content">{mensagem}</p>
      <div className="likes">
        <h3 className="qtdLikes">{like} likes</h3>
        <button className="button" onClick={onclickBtLike}>
          {textBtlike}
        </button>
      </div>
    </div>
  );
};

export default Post;
