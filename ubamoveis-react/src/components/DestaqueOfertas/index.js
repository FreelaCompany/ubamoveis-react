import React from "react";

import { Container, Titulo, TituloStrong, Separator } from "./styles";

import ContainerSlide from "./ContainerSlide";

export default function DestaqueOfertas() {
  return (
    <Container>
      <Titulo>
        Ofertas em <TituloStrong>Destaque</TituloStrong>
      </Titulo>
      <Separator />
      <ContainerSlide />
    </Container>
  );
}
