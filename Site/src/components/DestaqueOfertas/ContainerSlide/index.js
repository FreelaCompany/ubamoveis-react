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
import btnNext from "../../../assets/images/btnNext.png";
import btnPrev from "../../../assets/images/btnPrev.png";
// import btnOferta from "../../assets/images/btnOfertaBanner.png";

export default function ContainerSlide() {
  const [swiper, updateSwiper] = useState(null);

  const params = {
    loop: true,
    autoplay: {
      delay: 8500,
      disableOnInteraction: false,
    },
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
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
      <Swiper getSwiper={updateSwiper} {...params}>
        <Slide>teste</Slide>
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
