import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { criarPost } from "../../../api/posts.api";
import { authContext } from "../../../Routes";

import "./styles.css";

const PaginaPostar = () => {
  let { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  let auth = useContext(authContext);

  const tratarSubmit = (data) => {
    criarPost(data.texto, 0, auth.token)
      .then((post) => {
        console.log(post);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="post-container">
      <div className="content">
        <section className="form">
          <form onSubmit={handleSubmit(tratarSubmit)}>
            <h1>Postar</h1>
            <textarea
              rows="5"
              cols="33"
              placeholder="Adicionar"
              {...register("texto")}
            />
            <br />
            <button className="button" type="submit">
              Cadastrar
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default PaginaPostar;
