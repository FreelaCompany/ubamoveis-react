import React from "react";

import Menu from "../../components/Menu";
import Banner from "../../components/Banner";
import DestaqueOfertas from "../../components/DestaqueOfertas";
import Sobre from "../../components/Sobre";
import Newsletter from "../../components/Newsletter";
import NossasLojas from "../../components/NossasLojas";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Menu />
      <Banner />
      <DestaqueOfertas />
      <Sobre />
      <Newsletter />
      <NossasLojas />
      <Footer />
    </>
  );
}
