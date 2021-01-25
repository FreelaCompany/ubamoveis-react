import React, { useEffect, useState } from "react";
import ListActions from "../../store/ducks/produtos-list";
import { useDispatch, useSelector } from "react-redux";

import Menu from "../../components/Menu";
import BannerInterna from "../../components/BannerInterna";
import Newsletter from "../../components/Newsletter";
import NossasLojas from "../../components/NossasLojas";
import Footer from "../../components/Footer";

import Produto from "../../components/Produto";

import {
  Titulo,
  DivTitulo,
  TituloStrong,
  Separator,
  DivSobre,
  Paragraph,
  DivVantagens,
  TituloVantagens,
  LinhaVantagens,
  Vantagem,
  ImgVantagem,
  DivControls,
  Control,
  DivProdutos,
} from "./styles";

import imgVantagem from "../../assets/images/imgVantagem.png";
import ModuladosImg from "../../assets/images/modulados_interna.png";

import { dataOfertas } from "../../data/destaqueOfertas";

export default function Modulados() {
  const dispatch = useDispatch();
  const [subcategoria, setSubCategoria] = useState(1);
  const { data: dataProdutos } = useSelector((state) => state.produtosList);

  async function handleListProdutos() {
    dispatch(ListActions.listRequest());
  }

  useEffect(() => {
    handleListProdutos();
  }, []);

  const dataProdutosFilter = dataProdutos?.filter(
    (item) => item.id_categoria === 2 && item.id_subcategoria === subcategoria
  );
  return (
    <>
      <Menu />
      <BannerInterna
        image={ModuladosImg}
        title="modulados"
        text="Traga seu projeto pra Ubá Móveis e receba seu orçamento de Modulados na hora."
      />
      <DivTitulo>
        <Titulo>Como funcionam os</Titulo>
        <TituloStrong>Móveis Modulados</TituloStrong>
        <Separator />
      </DivTitulo>
      <DivSobre>
        <Paragraph>
          Móveis modulados não são móveis planejados nem móveis sob medida, são
          móveis desenvolvido seguindo um padrão de tamanhos e design.
          Produzindo diversos tipos de módulos para modular sua sala, quarto,
          cozinha ou mesmo escritório.
        </Paragraph>
        <Paragraph>
          Com o móvel modulado você mesmo faz o projeto do seu quarto ou
          cozinha. é possível você informar as medidas do ambiente e assim
          escolher os módulos para que possa projetar o seu ambiente, tendo uma
          ideia de como ficará os módulos instalados.
        </Paragraph>
        <Paragraph>
          As linhas buscam um design com qualidade diferenciada porém com um
          investimento mais em conta. Ao projetar seu quarto ou cozinha com os
          móveis modulares terá uma grande economia geralmente menos de 50% dos
          valores de contratar uma empresa de móveis planejados.
        </Paragraph>
        <Paragraph>
          Você encontra armários modulados para cozinha e quarto. Guarda roupa
          modulados para quarto de solteiro e casal, podendo montar de acordo
          com seu espaço. Na cozinha linhas com todos os tipos de armários de
          cozinha, gabinete, balcão, pia, paneleiro e módulos aéreos.
        </Paragraph>
      </DivSobre>
      <DivVantagens>
        <TituloVantagens>Vantagens:</TituloVantagens>
        <LinhaVantagens>
          <Vantagem>Traga a sua medida</Vantagem>
          <ImgVantagem src={imgVantagem} />
          <Vantagem>Realize os projetos e tenha orçamentos na hora</Vantagem>
          <ImgVantagem src={imgVantagem} />
          <Vantagem>Finalize a compra</Vantagem>
          <ImgVantagem src={imgVantagem} />
          <Vantagem>Agende sua entrega e montagem</Vantagem>
        </LinhaVantagens>
      </DivVantagens>

      <DivTitulo>
        <TituloStrong>Últimos Produtos</TituloStrong>
        <Separator />
        <DivControls>
          <Control
            active={subcategoria === 1}
            onClick={() => setSubCategoria(1)}>
            Quarto de Solteiro
          </Control>
          <Control
            active={subcategoria === 2}
            onClick={() => setSubCategoria(2)}>
            Quarto de Casal
          </Control>
          <Control
            active={subcategoria === 3}
            onClick={() => setSubCategoria(3)}>
            Cozinha
          </Control>
        </DivControls>
      </DivTitulo>

      <DivProdutos>
        {dataProdutosFilter?.slice(0, 6).map((item) => (
          <Produto data={item} key={item.id_produto} />
        ))}
      </DivProdutos>
      <Newsletter />
      <NossasLojas />
      <Footer />
    </>
  );
}
