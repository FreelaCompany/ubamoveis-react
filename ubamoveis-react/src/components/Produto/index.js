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
      <img src={data.foto} alt="datar" />
      <Separator />
      <DivPrice>
        <Title>{data.nome}</Title>
        {data.id_categoria !== 2 && data.mostrar_preco && (
          <Price>R$ {data.preco}</Price>
        )}
        {data.id_categoria !== 2 && data.mostrar_preco && (
          <Valid>Preço válido até {data.validade_preco}</Valid>
        )}
      </DivPrice>
      <SeparatorLight />
      <DivBottom>
        <DivInfo>
          <Info>Altura: {data.altura}cm</Info>
          <Info>Largura: {data.largura}cm</Info>
          <Info>Profundidade: {data.profundidade}cm</Info>
        </DivInfo>
        <DivColors>
          <TitleColor>CORES DISPONÍVEIS:</TitleColor>
          <Colors>
            {data.cor1 !== "null" && <Color color={data.cor1} />}
            {data.cor2 !== "null" && <Color color={data.cor2} />}
            {data.cor3 !== "null" && <Color color={data.cor3} />}
            {data.cor4 !== "null" && <Color color={data.cor4} />}
          </Colors>
        </DivColors>
      </DivBottom>
    </ContainerProduto>
  );
}

export default Produto;
