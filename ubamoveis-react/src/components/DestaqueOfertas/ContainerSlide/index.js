import React, { useState, useEffect } from "react";
import Swiper from "react-id-swiper";

import "swiper/css/swiper.css";

import {
  Container,
  ButtonPrev,
  ButtonNext,
  DivControls,
  Control,
  DivProduto,
} from "./styles";

import {
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
} from "../../Produto/styles";

import btnNext from "../../../assets/images/ofertas/destaRightButton.png";
import btnPrev from "../../../assets/images/ofertas/destaLeftButton.png";

export default function ContainerSlide({ data }) {
  const [swiper, updateSwiper] = useState(null);
  const [categoria, setCategoria] = useState(1);

  const dataProdutos = data?.filter((item) => item.id_categoria === categoria);

  const params = {
    swiper,
    initialSlide: 0,
    loop: true,
    getSwiper: updateSwiper,
    // autoplay: {
    //   delay: 8500,
    //   disableOnInteraction: false,
    // },
    slidesPerView: 3,
    // slidesPerGroup: 3,
    spaceBetween: 7,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
      el: ".swiper-pagination",
    },
  };

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

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
      <Swiper {...params}>
        {dataProdutos?.map((slide) => (
          <DivProduto key={slide.id_produto}>
            <img src={slide.foto} alt="Slider" />
            <Separator />
            <DivPrice>
              <Title>{slide.nome}</Title>
              <Price>R$ {slide.preco}</Price>
              <Valid>Preço válido até {slide.validade_preco}</Valid>
            </DivPrice>
            <SeparatorLight />
            <DivBottom>
              <DivInfo>
                <Info>Altura: {slide.altura}cm</Info>
                <Info>Largura: {slide.largura}cm</Info>
                <Info>Profundidade: {slide.profundidade}cm</Info>
              </DivInfo>
              <DivColors>
                <TitleColor>CORES DISPONÍVEIS:</TitleColor>
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
      </Swiper>
      <ButtonPrev onClick={goPrev}>
        <img src={btnPrev} />
      </ButtonPrev>
      <ButtonNext onClick={goNext}>
        <img src={btnNext} />
      </ButtonNext>
    </Container>
  );
}
