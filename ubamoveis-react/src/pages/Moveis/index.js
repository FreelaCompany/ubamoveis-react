import React from "react";

import Menu from "../../components/Menu";
import BannerInterna from "../../components/BannerInterna";
import Newsletter from "../../components/Newsletter";
import NossasLojas from "../../components/NossasLojas";
import Footer from "../../components/Footer";

import Produto from "../../components/Produto";

import {
  DivTitulo,
  Titulo,
  TituloStrong,
  Separator,
  DivProdutos,
} from "./styles";

import MoveisImg from "../../assets/images/moveis_interna.png";

import { dataOfertas } from "../../data/destaqueOfertas";

export default function Moveis() {
  return (
    <>
      <Menu />
      <BannerInterna
        image={MoveisImg}
        title="Móveis"
        text="Confira nossas últimas promoções ou nosso estoque completo em nossas lojas."
      />
      <DivTitulo>
        <Titulo>
          Últimas <TituloStrong>Ofertas</TituloStrong>
        </Titulo>
        <Separator />
      </DivTitulo>
      <DivProdutos>
        {dataOfertas.map((item) => (
          <Produto data={item} />
        ))}
      </DivProdutos>
      <Newsletter />
      <NossasLojas />
      <Footer />
    </>
  );
}
