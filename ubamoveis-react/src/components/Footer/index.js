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
          <a
            href="http://www.mappublicidade.com.br/"
            target="_blank"
            rel="noopener noreferrer">
            <img src={map} alt="" />
          </a>
        </Dev>
      </Content>
    </Container>
  );
}
