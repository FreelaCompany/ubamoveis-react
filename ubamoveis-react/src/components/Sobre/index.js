import React from "react";

import {
  Container,
  Titulo,
  SubTitulo,
  Paragraph,
  TituloFrete,
  DivList,
  ItemList,
  Content,
} from "./styles";

import checkList from "../../assets/images/checkList.png";

export default function Sobre() {
  return (
    <Container>
      <Content>
        <Titulo>A Ubá Móveis</Titulo>
        <SubTitulo>37 anos de tradição na região</SubTitulo>
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
        <TituloFrete>
          Frete e montagem grátis nas seguintes cidades:
        </TituloFrete>
        <DivList>
          <ItemList>
            <img src={checkList} alt="" /> Barra do Piraí
          </ItemList>
          <ItemList>
            <img src={checkList} alt="" /> Barra Mansa
          </ItemList>
          <ItemList>
            <img src={checkList} alt="" /> Volta Redonda
          </ItemList>
        </DivList>
        <Paragraph>
          Nossa equipe de entrega e montagem são treinadas diretamente nas
          fábricas para executarem um serviço a altura do que nossos clientes
          mereçam. Para possíveis problemas, temos um canal direto de um
          departamento especializado em resolver as assistências técnicas,
          quando raramente ocorrem.
        </Paragraph>
      </Content>
    </Container>
  );
}
