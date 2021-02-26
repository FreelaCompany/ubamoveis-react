import React, { useEffect } from "react";
import ListActions from "../../store/ducks/produtos-list";
import { useDispatch, useSelector } from "react-redux";

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

import ColchoesImg from "../../assets/images/colchoes_interna.png";

export default function Colchoes() {
  const dispatch = useDispatch();
  const { data: dataProdutos } = useSelector((state) => state.produtosList);

  async function handleListProdutos() {
    dispatch(ListActions.listRequest());
  }

  useEffect(() => {
    handleListProdutos();
  }, []);

  const dataProdutosFilter = dataProdutos?.filter(
    (item) => item.id_categoria === 3
  );
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
        {dataProdutosFilter?.slice(0, 9).map((item) => (
          <Produto data={item} key={item.id_produto} />
        ))}
      </DivProdutos>
      <Newsletter />
      <NossasLojas />
      <Footer />
    </>
  );
}
