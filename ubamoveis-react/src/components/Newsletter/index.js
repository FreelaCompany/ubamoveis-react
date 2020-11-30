import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import NewsActions from "../../store/ducks/newsletter";

import { Container, Content, DivInput, LabelInput, Input } from "./styles";

import newsletter from "../../assets/images/newsletter.png";

export default function Newsletter() {
  const dispatch = useDispatch();
  const [telefone, setTelefone] = useState();
  const { loading } = useSelector((state) => state.newsletter);

  async function handleSubmit(data) {
    try {
      const formData = new FormData();

      formData.append("whatsapp", telefone);

      dispatch(NewsActions.newsRequest(formData));
    } catch (err) {
      console.log(err.message);
    }
  }

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
            <button type="button" onClick={() => handleSubmit()}>
              {loading ? "Enviando..." : "Cadastrar"}
            </button>
          </Input>
        </DivInput>
      </Content>
    </Container>
  );
}
