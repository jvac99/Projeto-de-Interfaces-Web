import "./styles.css";
import { save } from "../../../api/service";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const PaginaCadastro = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = ({ titulo, corpo }) => {
    save(titulo, corpo);
    navigate("/mostrar");
  };

  return (
    <div className="paginaCadastro-container">
      <form className="forms" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Título"
          {...register("titulo")}
        />
        <textarea
          name=""
          id=""
          cols="10"
          rows="10"
          placeholder="Texto"
          {...register("corpo")}
        />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};
