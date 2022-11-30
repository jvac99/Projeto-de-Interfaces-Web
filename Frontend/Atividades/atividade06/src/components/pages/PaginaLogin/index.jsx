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
        auth.setToken(response.data.token);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(tratarSubmit)}>
        <input {...register("email")} type="text" placeholder="Email" />
        <br />
        <input type="password" {...register("senha")} placeholder="Senha" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default PaginaLogin;
