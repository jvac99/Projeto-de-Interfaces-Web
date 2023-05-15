import { NavLink } from "react-router-dom";
import "./styles.css";

export const Navegador = () => {
  return (
    <div className="container-navegador">
      <ul className="items-navegador">
        <li className="item-navegador">
          <NavLink to="/" className="item-navegador-link">
            Cadastrar
          </NavLink>
        </li>
        <li className="item-navegador">
          <NavLink to="/mostrar" className="item-navegador-link">
            Mostrar
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
