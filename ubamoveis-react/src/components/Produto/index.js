import React from "react";

import {
  ContainerProduto,
  Separator,
  DivPrice,
  Title,
  SeparatorLight,
  Price,
  Valid,
  DivBottom,
  DivInfo,
  Info,
  DivColors,
  TitleColor,
  Colors,
  Color,
} from "./styles";

function Produto({ data }) {
  return (
    <ContainerProduto>
      <img src={data.image} alt="Slider" />
      <Separator />
      <DivPrice>
        <Title>Guarda-Roupa Casal Retrô</Title>
        <Price>R$ 679,00</Price>
        <Valid>Preço válido até 10/07/2020</Valid>
      </DivPrice>
      <SeparatorLight />
      <DivBottom>
        <DivInfo>
          <Info>Altura: 180cm</Info>
          <Info>Largura: 148cm</Info>
          <Info>Profundidade: 180cm</Info>
        </DivInfo>
        <DivColors>
          <TitleColor>CORES DISPONÍVEIS:</TitleColor>
          <Colors>
            <Color color="#fff" />
            <Color color="#E2DABF" />
            <Color color="#211B16" />
          </Colors>
        </DivColors>
      </DivBottom>
    </ContainerProduto>
  );
}

export default Produto;
