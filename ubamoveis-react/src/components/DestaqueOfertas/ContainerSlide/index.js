import React, { useState } from "react";
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

import { dataOfertas } from "../../../data/destaqueOfertas";

export default function ContainerSlide() {
  const [swiper, updateSwiper] = useState(null);

  const RenderSlider = dataOfertas.map((slide) => (
    <DivProduto key={slide.id}>
      <img src={slide.image} alt="Slider" />
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
    </DivProduto>
  ));

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
        <Control active>Móveis</Control>
        <Control>Modulados</Control>
        <Control>Colchões</Control>
      </DivControls>
      <Swiper {...params}>{RenderSlider}</Swiper>
      <ButtonPrev onClick={goPrev}>
        <img src={btnPrev} />
      </ButtonPrev>
      <ButtonNext onClick={goNext}>
        <img src={btnNext} />
      </ButtonNext>
    </Container>
  );
}
