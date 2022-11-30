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
    <div className="container-postar">
      <div className="container-content">
        <form className="form-postar" onSubmit={handleSubmit(tratarSubmit)}>
          <textarea
            rows="5"
            cols="33"
            placeholder="Adicionar"
            className="add-postar"
            {...register("texto")}
          />
          <input type="submit" value="Postar" className="add-postar-button" />
        </form>
      </div>
    </div>
  );
};

export default PaginaPostar;
