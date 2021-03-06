import React, { useState } from "react";

import {
  Container,
  DivControls,
  Control,
  DivProduto,
  DivDestaques,
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

export default function ContainerSlide({ data }) {
  const [categoria, setCategoria] = useState(1);

  const dataProdutos = data?.filter((item) => item.id_categoria === categoria);

  return (
    <Container id="banner">
      <DivControls>
        <Control active={categoria === 1} onClick={() => setCategoria(1)}>
          Móveis
        </Control>
        <Control active={categoria === 2} onClick={() => setCategoria(2)}>
          Modulados
        </Control>
        <Control active={categoria === 3} onClick={() => setCategoria(3)}>
          Colchões
        </Control>
      </DivControls>
      <DivDestaques>
        {dataProdutos?.slice(0, 3).map((slide) => (
          <DivProduto key={slide.id_produto}>
            <img src={slide.foto} alt="Slider" />
            <Separator />
            <DivPrice>
              <Title>{slide.nome}</Title>
              {categoria !== 2 && slide.mostrar_preco && (
                <Price>R$ {slide.preco}</Price>
              )}
              {categoria !== 2 && slide.mostrar_preco && (
                <Valid>Preço válido até {slide.validade_preco}</Valid>
              )}
            </DivPrice>
            <SeparatorLight />
            <DivBottom>
              <DivInfo>
                {slide.altura !== "null" && (
                  <Info>Altura: {slide.altura}cm</Info>
                )}
                {slide.largura !== "null" && (
                  <Info>Largura: {slide.largura}cm</Info>
                )}
                {slide.profundidade !== "null" && (
                  <Info>Profundidade: {slide.profundidade}cm</Info>
                )}
              </DivInfo>
              <DivColors>
                {slide.cor1 !== "null" &&
                  slide.cor2 === "null" &&
                  slide.cor3 === "null" &&
                  slide.cor4 === "null" && (
                    <TitleColor>CORES DISPONÍVEIS:</TitleColor>
                  )}
                {slide.cor1 !== "null" &&
                  slide.cor2 !== "null" &&
                  slide.cor3 === "null" &&
                  slide.cor4 === "null" && (
                    <TitleColor>CORES DISPONÍVEIS:</TitleColor>
                  )}
                {slide.cor1 !== "null" &&
                  slide.cor2 !== "null" &&
                  slide.cor3 !== "null" &&
                  slide.cor4 === "null" && (
                    <TitleColor>CORES DISPONÍVEIS:</TitleColor>
                  )}
                {slide.cor1 !== "null" &&
                  slide.cor2 !== "null" &&
                  slide.cor3 !== "null" &&
                  slide.cor4 !== "null" && (
                    <TitleColor>CORES DISPONÍVEIS:</TitleColor>
                  )}
                <Colors>
                  {slide.cor1 !== "null" && <Color color={slide.cor1} />}
                  {slide.cor2 !== "null" && <Color color={slide.cor2} />}
                  {slide.cor3 !== "null" && <Color color={slide.cor3} />}
                  {slide.cor4 !== "null" && <Color color={slide.cor4} />}
                </Colors>
              </DivColors>
            </DivBottom>
          </DivProduto>
        ))}
      </DivDestaques>
    </Container>
  );
}
