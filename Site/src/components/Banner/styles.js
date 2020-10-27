import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.section`
  width: 100%;
  height: 671px;
`;

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 671px;
  background: ${({ url }) =>
    url ? `url(${url}) no-repeat center center;` : `none`};
  background-size: cover;
`;

export const DivTitulo = styled.div`
  width: 222px;
  height: 57px;
  position: absolute;
  left: 502px;
  top: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Titulo = styled.h1`
  font-family: "DosisSemiBold";
  font-size: 24px;
  line-height: 31px;
  color: #fff;
`;

export const Descricao = styled.p`
  font-family: "SourceSansProRegular";
  font-size: 16px;
  line-height: 20px;
  color: #fff;
`;

export const DivPreco = styled.div`
  width: 202px;
  height: 88px;
  position: absolute;
  left: 536px;
  top: 523px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Preco = styled.h1`
  font-family: "DosisBold";
  font-size: 51px;
  line-height: 64px;
  color: #fff;
`;

export const PrecoSmall = styled.span`
  font-family: "DosisBold";
  font-size: 24px;
  line-height: 31px;
  color: #fff;
`;

export const Pagamento = styled.p`
  font-family: "SourceSansProRegular";
  font-size: 19px;
  line-height: 24px;
  color: #fff;
`;

export const OfertaNumero = styled.a`
  width: 177px;
  height: 52px;
  position: absolute;
  right: 200px;
  bottom: 78px;
  background: ${({ src }) =>
    src ? `url(${src}) no-repeat center center;` : `none`};
  background-size: cover;
`;

export const ButtonPrev = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  color: ${colors.white};
  position: absolute;
  z-index: 999;
  left: 0;
  top: 60%;
  transition: 300ms ease;

  &:hover {
    transform: scale(1.2);
  }

  @media screen and (max-width: 1100px) {
    transform: scale(1.3);
    right: 154px;
  }

  @media screen and (max-width: 680px) {
    left: 48px;
    top: 40%;
  }
`;

export const ButtonNext = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  color: ${colors.white};
  position: absolute;
  z-index: 999;
  right: 0;
  top: 60%;
  transition: 300ms ease;

  &:hover {
    transform: scale(1.2);
  }

  @media screen and (max-width: 1100px) {
    transform: scale(1.3);
    right: 154px;
  }

  @media screen and (max-width: 680px) {
    right: 48px;
    top: 40%;
  }
`;
