import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { login } from "../../../api/usuarios.api";
import { authContext } from "../../../Routes";

import "./styles.css";

const PaginaLogin = () => {
  let { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  let auth = useContext(authContext);

  const tratarSubmit = (data) => {
    login(data.email, data.senha)
      .then((response) => {
        auth.setToken(response.data.token, true);
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="logon-container">
      <section className="form">
        <form onSubmit={handleSubmit(tratarSubmit)}>
          <h1>Faça o seu Login</h1>
          <input {...register("email")} type="text" placeholder="Email" />
          <br />
          <input type="password" {...register("senha")} placeholder="Senha" />
          <button className="button" type="submit">
            Entrar
          </button>
        </form>
      </section>
    </div>
  );
};

export default PaginaLogin;
