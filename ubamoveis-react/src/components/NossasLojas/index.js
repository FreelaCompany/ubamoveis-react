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
  QrCodeZap,
  DivImgPagamento,
} from "./styles";

import pagamento from "../../assets/images/pagamento.png";
import qrVoltaRedonda from "../../assets/images/qr_voltaredonda.jpeg";
import qrBarraDoPirai from "../../assets/images/qr_barradopirai.jpeg";
import qrBarraMansa from "../../assets/images/qr_barramansa.jpeg";

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
          <WhatsappLoja href="https://wa.me/5524993179372" target="_blank">
            <WhatsApp color="#F7BF3B" size={17} /> (24) 99317-9372
          </WhatsappLoja>
          <QrCodeZap src={qrVoltaRedonda} />
        </Loja>
        <Loja>
          <NomeLoja>Barra Mansa</NomeLoja>
          <EnderecoLoja>
            Rua Lacyr Schetino, 46, 9 de Abril, Barra Mansa - RJ <br />
            CEP: 27335-270
          </EnderecoLoja>
          <WhatsappLoja href="https://wa.me/5524993184972" target="_blank">
            <WhatsApp color="#F7BF3B" size={17} /> (24) 99318-4972
          </WhatsappLoja>
          <QrCodeZap src={qrBarraDoPirai} />
        </Loja>
        <Loja>
          <NomeLoja>Barra do Piraí</NomeLoja>
          <EnderecoLoja>
            R. Luís Barbosa, 374 - Matadouro, Barra do Piraí - RJ <br />
            CEP: 27115-000
          </EnderecoLoja>
          <WhatsappLoja href="https://wa.me/5524993178979" target="_blank">
            <WhatsApp color="#F7BF3B" size={17} /> (24) 99317-8979
          </WhatsappLoja>
          <QrCodeZap src={qrBarraMansa} />
        </Loja>
      </DivLojas>
      <SeparatorLarge />
      <DivPagamento>
        <TituloPagamento>Formas de Pagamento em nossas lojas:</TituloPagamento>
        <DivImgPagamento>
          <img src={pagamento} alt="" />
          <TituloPagamento>
            60 dias para começar a pagar. Parcele em até 15x
          </TituloPagamento>
        </DivImgPagamento>
      </DivPagamento>
    </Container>
  );
}
