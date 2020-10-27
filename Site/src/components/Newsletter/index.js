import React, { useState } from "react";

import { Container, Content, DivInput, LabelInput, Input } from "./styles";

import newsletter from "../../assets/images/newsletter.png";

export default function Newsletter() {
  const [telefone, setTelefone] = useState();
  return (
    <Container>
      <Content>
        <img src={newsletter} alt="" />
        <DivInput>
          <LabelInput>
            Cadastre para receber o desconto! Além de ofertas e conteúdos
            exclusivos da Ubá Móveis.
          </LabelInput>
          <Input>
            <input
              type="text"
              placeholder="Insira seu WhatsApp"
              onChange={(e) => setTelefone(e.target.value)}
            />
            <button type="button">cadastrar</button>
          </Input>
        </DivInput>
      </Content>
    </Container>
  );
}
