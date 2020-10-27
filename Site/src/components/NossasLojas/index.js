import React from "react";

import { FaWhatsapp as WhatsApp } from "react-icons/fa";

import {
  Container,
  Titulo,
  TituloStrong,
  Separator,
  DivLojas,
  Loja,
  NomeLoja,
  EnderecoLoja,
  WhatsappLoja,
  SeparatorLarge,
  DivPagamento,
  TituloPagamento,
} from "./styles";

import pagamento from "../../assets/images/pagamento.png";

export default function NossasLojas() {
  return (
    <Container>
      <Titulo>
        Nossas <TituloStrong>Lojas</TituloStrong>
      </Titulo>
      <Separator />
      <DivLojas>
        <Loja>
          <NomeLoja>Volta Redonda</NomeLoja>
          <EnderecoLoja>
            Rua Gustavo Lira, 14, Centro, Volta Redonda, RJ <br /> CEP:
            27253-280
          </EnderecoLoja>
          <WhatsappLoja>
            <WhatsApp color="#F7BF3B" size={17} /> (24) 99317-9372
          </WhatsappLoja>
        </Loja>
        <Loja>
          <NomeLoja>Barra Mansa</NomeLoja>
          <EnderecoLoja>
            Rua Lacyr Schetino, 46, 9 de Abril, Barra Mansa - RJ <br />
            CEP: 27335-270
          </EnderecoLoja>
          <WhatsappLoja>
            <WhatsApp color="#F7BF3B" size={17} /> (24) 99318-4972
          </WhatsappLoja>
        </Loja>
        <Loja>
          <NomeLoja>Barra do Piraí</NomeLoja>
          <EnderecoLoja>
            R. Luís Barbosa, 374 - Matadouro, Barra do Piraí - RJ <br />
            CEP: 27115-000
          </EnderecoLoja>
          <WhatsappLoja>
            <WhatsApp color="#F7BF3B" size={17} /> (24) 99317-8979
          </WhatsappLoja>
        </Loja>
      </DivLojas>
      <SeparatorLarge />
      <DivPagamento>
        <TituloPagamento>Formas de Pagamento em nossas lojas:</TituloPagamento>
        <img src={pagamento} alt="" />
      </DivPagamento>
    </Container>
  );
}
