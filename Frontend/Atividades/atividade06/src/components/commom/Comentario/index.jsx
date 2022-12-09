import { useContext, useState, useEffect } from "react";
import { authContext } from "../../../Routes";
import { fetchusuario } from "../../../api/usuarios.api";
import "./styles.css";

const Comentario = ({ id_usuario, mensagem }) => {
  const [nome, setNome] = useState();
  let auth = useContext(authContext);

  useEffect(() => {
    fetchusuario(auth.token, id_usuario)
      .then((response) => {
        setNome(response.data.nome);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="card-comentario">
      <h1>{nome}</h1>
      <p>{mensagem}</p>
    </div>
  );
};

export default Comentario;
