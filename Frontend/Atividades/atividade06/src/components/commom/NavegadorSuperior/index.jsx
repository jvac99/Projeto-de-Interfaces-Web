import { useContext } from "react";
import { authContext } from "../../../Routes";
import { NavLink } from "react-router-dom";

import img from "../../../assets/logo.png";

import "./styles.css";

const NavegadorSuperior = () => {
  let activeStyle = {
    textDecoration: "underline",
  };

  let auth = useContext(authContext);

  if (auth.token == null) {
    return (
      <nav className="navegador-superior">
        <div className="container-navegador-superior">
          <img src={img} alt="logo" className="logo-navegador-superior" />
          <ul className="items-navegador-superior">
            <li className="button-navegador-superior">
              <NavLink
                to="/paginaCadastro"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="button-navegador-superior"
              >
                Cadastro
              </NavLink>
            </li>
            <li className="button-navegador-superior">
              <NavLink
                to="/paginaLogin"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="button-navegador-superior"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  } else {
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
            <li className="button-navegador-superior">
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="button-navegador-superior"
                onClick={() => auth.setToken(null)}
              >
                Logout
              </NavLink>
            </li>
          </ul>
          <h3 className="name-navegador-superior">J.Victor</h3>
        </div>
      </nav>
    );
  }
};

export default NavegadorSuperior;
