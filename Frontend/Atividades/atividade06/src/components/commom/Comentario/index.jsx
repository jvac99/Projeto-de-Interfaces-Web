import "./styles.css";

const Comentario = ({ nome, mensagem }) => {
  return (
    <div className="card-comentario">
      <h1 className="title-comentario">{nome}</h1>
      <p className="content-comentario">{mensagem}</p>
    </div>
  );
};

export default Comentario;
