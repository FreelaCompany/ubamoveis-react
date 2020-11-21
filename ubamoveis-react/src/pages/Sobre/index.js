import React from "react";

import Menu from "../../components/Menu";
import BannerInterna from "../../components/BannerInterna";
import Newsletter from "../../components/Newsletter";
import NossasLojas from "../../components/NossasLojas";
import Footer from "../../components/Footer";

import {
  DivTitulo,
  TituloStrong,
  Separator,
  DivSobre,
  Paragraph,
} from "./styles";

import SobreImg from "../../assets/images/sobre_interna.png";

export default function Sobre() {
  return (
    <>
      <Menu />
      <BannerInterna
        image={SobreImg}
        title="sobre nós"
        text="Saiba mais sobre a Ubá Moveis"
      />
      <DivTitulo>
        <TituloStrong>37 anos de tradição na região</TituloStrong>
        <Separator />
      </DivTitulo>
      <DivSobre>
        <Paragraph>
          A loja onde se encontra de tudo para mobiliar uma casa, onde temos em
          um só lugar o setor de móveis em geral representado pela Ubá Móveis, o
          setor infantil representado pela Ubá Bebê e o setor de colchões
          representado pela Ubá Colchoes, onde devido a este desenho de loja e
          sub lojas, conseguimos ser especialistas nesses vários seguimentos.
        </Paragraph>
        <Paragraph>
          Trabalhamos e selecionamos os melhores e maiores fornecedores de
          móveis do Brasil, e que 90% dos produtos, sendo exclusivos para a
          nossa empresa.
        </Paragraph>
        <Paragraph>
          Somos sinônimos de qualidade, eficiência e inovação. Trazendo sempre
          em primeira mão todas as novas tendências do que há de mais moderno em
          termos de mobiliário residencial.
        </Paragraph>
        <Paragraph>
          Uma empresa onde trabalhamos com tudo que temos exposto nos
          mostruários em pronta entrega, que para entregas em Volta Redonda,
          Barra Mansa e Barra do Piraí, conseguimos atender em até 48 horas.
          Para isso temos a maior área de estocagem da região Sul Fluminense.
        </Paragraph>
      </DivSobre>
      <Newsletter />
      <NossasLojas />
      <Footer />
    </>
  );
}
