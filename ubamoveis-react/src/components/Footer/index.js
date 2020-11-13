import React from "react";

import { Container, Content, Direitos, Dev } from "./styles";

import map from "../../assets/images/map.png";

export default function Footer() {
  return (
    <Container>
      <Content>
        <Direitos>Ubá Móveis - Todos os direitos reservados.</Direitos>
        <Dev>
          Desenvolvido por:{" "}
          <a href="" target="_blank">
            <img src={map} alt="" />
          </a>
        </Dev>
      </Content>
    </Container>
  );
}
