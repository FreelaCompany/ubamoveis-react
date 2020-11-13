import React from "react";

import { Container, Title, Text } from "./styles";

function BannerInterna({ image, title, text }) {
  return (
    <Container url={image}>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Container>
  );
}

export default BannerInterna;
