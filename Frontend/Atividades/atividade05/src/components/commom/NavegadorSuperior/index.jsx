import "./styles.css";

import img from "../../../assets/logo.png";

import { NavLink } from "react-router-dom";

const NavegadorSuperior = () => {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <nav className="navegador-superior">
      <div className="container-navegador-superior">
        <img src={img} alt="logo" className="logo-navegador-superior" />
        <ul className="items-navegador-superior">
          <li className="button-navegador-superior">
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="button-navegador-superior"
            >
              Linha do tempo
            </NavLink>
          </li>
          <li className="button-navegador-superior">
            <NavLink
              to="/paginaPostar"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="button-navegador-superior"
            >
              Postar
            </NavLink>
          </li>
        </ul>
        <h3 className="name-navegador-superior">J.Victor</h3>
      </div>
    </nav>
  );
};

export default NavegadorSuperior;
