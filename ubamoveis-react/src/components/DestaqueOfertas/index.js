import React from "react";

import { Container, Titulo, TituloStrong, Separator, Obs } from "./styles";

import ContainerSlide from "./ContainerSlide";

export default function DestaqueOfertas() {
  return (
    <Container>
      <Titulo>
        Ofertas em <TituloStrong>Destaque</TituloStrong>
      </Titulo>
      <Separator />
      <ContainerSlide />
      <Obs>
        Todas as ofertas são válidas somente enquanto durarem os estoques.
      </Obs>
    </Container>
  );
}
