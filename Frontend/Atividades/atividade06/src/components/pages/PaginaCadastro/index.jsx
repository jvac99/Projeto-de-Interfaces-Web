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
        alert(error.message);
      });
  };

  return (
    <div className="register-container">
      <div className="content">
        <section className="form">
          <form onSubmit={handleSubmit(tratarSubmit)}>
            <h1>Cadastro</h1>
            <input {...register("nome")} type="text" placeholder="Nome" />
            <br />
            <input {...register("email")} type="text" placeholder="Email" />
            <br />
            <input type="password" {...register("senha")} placeholder="Senha" />
            <button className="button" type="submit">
              Cadastrar
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default PaginaCadastro;
