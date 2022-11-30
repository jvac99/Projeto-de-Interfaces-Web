import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const PaginaPostar = () => {
  const navigate = useNavigate();
  return (
    <div className="container-postar">
      <div className="container-content">
        <form className="form-postar" onSubmit={() => navigate("/")}>
          <textarea
            rows="5"
            cols="33"
            placeholder="Adicionar"
            className="add-postar"
          />
          <input type="submit" value="Postar" className="add-postar-button" />
        </form>
      </div>
    </div>
  );
};

export default PaginaPostar;
