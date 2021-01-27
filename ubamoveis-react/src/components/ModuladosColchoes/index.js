import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

import ModuladosHome from "../../assets/images/modulados_home.png";
import ColchaoHome from "../../assets/images/colchao_home.png";

function ModuladosColchoes() {
  return (
    <Container>
      <Link to="/modulados">
        <img src={ModuladosHome} alt="" />
      </Link>
      <Link to="/colchoes">
        <img src={ColchaoHome} alt="" />
      </Link>
    </Container>
  );
}

export default ModuladosColchoes;
