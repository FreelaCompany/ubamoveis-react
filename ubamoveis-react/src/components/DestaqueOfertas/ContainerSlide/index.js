import React, { useState } from "react";
import Swiper from "react-id-swiper";

import "swiper/css/swiper.css";

import {
  Container,
  Slide,
  ButtonPrev,
  ButtonNext,
  DivControls,
  Control,
  DivTitulo,
  Titulo,
  Descricao,
  DivPreco,
  Preco,
  PrecoSmall,
  Pagamento,
  OfertaNumero,
} from "./styles";

// import banner0 from "../../assets/images/bg1.png";
import btnNext from "../../../assets/images/ofertas/destaRightButton.png";
import btnPrev from "../../../assets/images/ofertas/destaLeftButton.png";
// import btnOferta from "../../assets/images/btnOfertaBanner.png";

import { dataOfertas } from "../../../data/destaqueOfertas";

export default function ContainerSlide() {
  const [swiper, updateSwiper] = useState(null);

  const RenderSlider = dataOfertas.map((slide) => (
    <Slide key={slide.id}>
      <img src={slide.image} alt="Slider" />
    </Slide>
  ));

  const params = {
    swiper,
    initialSlide: 0,
    loop: true,
    getSwiper: updateSwiper,
    autoplay: {
      delay: 8500,
      disableOnInteraction: false,
    },
    slidesPerView: 3,
    // slidesPerGroup: 3,
    spaceBetween: 7,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
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
        <Control>Móveis</Control>
        <Control>Modulados</Control>
        <Control>Colchões</Control>
      </DivControls>
      <Swiper {...params}>
        {RenderSlider}
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
