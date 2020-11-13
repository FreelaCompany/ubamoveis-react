import React from "react";

import { Container } from "./styles";

import ModuladosHome from "../../assets/images/modulados_home.png";
import ColchaoHome from "../../assets/images/colchao_home.png";

function ModuladosColchoes() {
  return (
    <Container>
      <img src={ModuladosHome} />
      <img src={ColchaoHome} />
    </Container>
  );
}

export default ModuladosColchoes;
