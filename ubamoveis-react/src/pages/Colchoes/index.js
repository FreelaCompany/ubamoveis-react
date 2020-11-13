import React from "react";

import Menu from "../../components/Menu";
import BannerInterna from "../../components/BannerInterna";
import DestaqueOfertas from "../../components/DestaqueOfertas";
import Sobre from "../../components/Sobre";
import Newsletter from "../../components/Newsletter";
import NossasLojas from "../../components/NossasLojas";
import Footer from "../../components/Footer";
import ModuladosColchoes from "../../components/ModuladosColchoes";

import Produto from "../../components/Produto";

import {
  DivTitulo,
  Titulo,
  TituloStrong,
  Separator,
  DivProdutos,
} from "./styles";

import ColchoesImg from "../../assets/images/colchoes_interna.png";

import { dataOfertas } from "../../data/destaqueOfertas";

export default function Colchoes() {
  return (
    <>
      <Menu />
      <BannerInterna
        image={ColchoesImg}
        title="Colchões"
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
