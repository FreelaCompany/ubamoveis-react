import React, { useState, useEffect } from "react";
import Swiper from "react-id-swiper";

import BannerActions from "../../store/ducks/banner";
import { useDispatch, useSelector } from "react-redux";

import "swiper/css/swiper.css";

import {
  Container,
  Slide,
  SlideMobile,
  ButtonPrev,
  ButtonNext,
} from "./styles";

import btnNext from "../../assets/images/btnNext.png";
import btnPrev from "../../assets/images/btnPrev.png";

export default function Banner() {
  const [swiper, updateSwiper] = useState(null);

  const dispatch = useDispatch();
  const { data: dataBanner } = useSelector((state) => state.banner);

  async function handleListBanner() {
    dispatch(BannerActions.bannerRequest());
  }

  useEffect(() => {
    handleListBanner();
  }, []);

  const params = {
    loop: true,
    observer: true,
    autoplay: {
      delay: 3500,
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
      <Swiper getSwiper={updateSwiper} {...params} shouldSwiperUpdate>
        {dataBanner?.map((banner) => (
          <a href={banner.link} target="_blank" key={banner.id_banner}>
            <Slide url={banner.banner} />
            <SlideMobile url={banner.banner_mobile} />
          </a>
        ))}
      </Swiper>
      <ButtonPrev onClick={goPrev}>
        <img src={btnPrev} alt="" />
      </ButtonPrev>
      <ButtonNext onClick={goNext}>
        <img src={btnNext} alt="" />
      </ButtonNext>
    </Container>
  );
}
