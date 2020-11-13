import React, { useState } from "react";
import Swiper from "react-id-swiper";

import "swiper/css/swiper.css";

import {
  Container,
  Slide,
  ButtonPrev,
  ButtonNext,
  DivTitulo,
  Titulo,
  Descricao,
  DivPreco,
  Preco,
  PrecoSmall,
  Pagamento,
  OfertaNumero,
} from "./styles";

import banner0 from "../../assets/images/bg1.png";
import btnNext from "../../assets/images/btnNext.png";
import btnPrev from "../../assets/images/btnPrev.png";
import btnOferta from "../../assets/images/btnOfertaBanner.png";

export default function Banner() {
  const [swiper, updateSwiper] = useState(null);

  const params = {
    loop: true,
    autoplay: {
      delay: 8500,
      disableOnInteraction: false,
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
      <Swiper getSwiper={updateSwiper} {...params}>
        <Slide url={banner0}>
          <DivTitulo>
            <Titulo>SOFÁ 3L ESTILO RETRÔ</Titulo>
            <Descricao>Várias opções de tecido</Descricao>
          </DivTitulo>
          <DivPreco>
            <Preco>
              R$ 1.637<PrecoSmall>,00</PrecoSmall>
            </Preco>
            <Pagamento>10X de R$ 204,00</Pagamento>
          </DivPreco>
          <OfertaNumero
            src={btnOferta}
            href="https://wa.me/5524993179372"
            target="_blank"
          />
        </Slide>
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
