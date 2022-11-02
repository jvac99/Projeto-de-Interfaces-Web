import React from "react";
import NavegadorSuperior from "../../commom/NavegadorSuperior";
import LinhaDoTempo from "../../commom/LinhaDoTempo";

import "./styles.css";

const PaginaFeed = () => {
  return (
    <div className="container">
      <NavegadorSuperior />
      <LinhaDoTempo />
    </div>
  );
};

export default PaginaFeed;
