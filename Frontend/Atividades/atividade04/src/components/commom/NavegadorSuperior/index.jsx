import "./styles.css";

import img from "../../../assets/logo.png";

const NavegadorSuperior = () => {
  return (
    <div className="navegadorSuperior">
      <img src={img} alt="logo" className="logo" />
      <button className="button" onClick={() => alert("Linha do tempo")}>
        Linha do tempo
      </button>
      <button className="button" onClick={() => alert("Postar")}>
        Postar
      </button>
      <h3 className="name">J.Victor</h3>
    </div>
  );
};

export default NavegadorSuperior;
