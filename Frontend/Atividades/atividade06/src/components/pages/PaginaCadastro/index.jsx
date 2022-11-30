import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { criarUsuario } from "../../../api/usuarios.api";

import "./styles.css";

const PaginaCadastro = () => {
  let { register, handleSubmit } = useForm();
  let navigate = useNavigate();

  const tratarSubmit = (data) => {
    criarUsuario(data.nome, data.email, data.senha)
      .then((usuario) => {
        console.log(usuario);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(tratarSubmit)}>
        <input {...register("nome")} type="text" placeholder="Nome" />
        <br />
        <input {...register("email")} type="text" placeholder="Email" />
        <br />
        <input type="password" {...register("senha")} placeholder="Senha" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default PaginaCadastro;
