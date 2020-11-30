import React, { useEffect } from "react";
import ListActions from "../../store/ducks/produtos-list";
import { useDispatch, useSelector } from "react-redux";

import { Container, Titulo, TituloStrong, Separator, Obs } from "./styles";

import ContainerSlide from "./ContainerSlide";

export default function DestaqueOfertas() {
  const dispatch = useDispatch();
  const { data: dataProdutos } = useSelector((state) => state.produtosList);

  async function handleListProdutos() {
    dispatch(ListActions.listRequest());
  }

  useEffect(() => {
    handleListProdutos();
  }, []);

  return (
    <Container>
      <Titulo>
        Ofertas em <TituloStrong>Destaque</TituloStrong>
      </Titulo>
      <Separator />
      <ContainerSlide data={dataProdutos} />
      <Obs>
        Todas as ofertas são válidas somente enquanto durarem os estoques.
      </Obs>
    </Container>
  );
}
