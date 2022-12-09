import { useContext } from "react";
import { authContext } from "../../../Routes";
import { NavLink } from "react-router-dom";
import jwt_decode from "jwt-decode";

import img from "../../../assets/react.svg";

import "./styles.css";

const NavegadorSuperior = () => {
  let auth = useContext(authContext);
  let token = auth.token;

  if (token == null) {
    return (
      <nav className="navegador-superior">
        <div className="container-navegador-superior">
          <img src={img} alt="logo" className="logo-navegador-superior" />
          <ul className="items-navegador-superior">
            <li className="button-navegador-superior">
              <NavLink to="/paginaCadastro" className="nav-navegador-superior">
                Cadastro
              </NavLink>
            </li>
            <li className="button-navegador-superior">
              <NavLink to="/paginaLogin" className="nav-navegador-superior">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  } else {
    let { nome } = jwt_decode(token);
    return (
      <nav className="navegador-superior">
        <div className="container-navegador-superior">
          <img src={img} alt="logo" className="logo-navegador-superior" />
          <ul className="items-navegador-superior">
            <li className="button-navegador-superior">
              <NavLink to="/" className="nav-navegador-superior">
                Linha do tempo
              </NavLink>
            </li>
            <li className="button-navegador-superior">
              <NavLink to="/paginaPostar" className="nav-navegador-superior">
                Postar
              </NavLink>
            </li>
            <li className="button-navegador-superior">
              <NavLink
                to="/"
                className="nav-navegador-superior"
                onClick={() => auth.setToken(null, false)}
              >
                Logout
              </NavLink>
            </li>
          </ul>
          <h3 className="name-navegador-superior">{nome}</h3>
        </div>
      </nav>
    );
  }
};

export default NavegadorSuperior;
