import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const Container = styled.section`
  width: 100%;
  max-width: 1390px;
  height: 810px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 auto;

  .swiper-container {
    width: 100%;
    height: 100%;
    max-width: 1220px;
  }

  .swiper-slide {
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .swiper-pagination {
    position: absolute;
    text-align: center;
    margin-top: 20px;
    bottom: 10px;
  }

  .swiper-pagination-bullet {
    border: 2px solid #747474;
  }

  .swiper-pagination-bullet-active {
    background: #000;
    border: 2px solid #000;
  }
`;

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 385px;
  height: 648px;
  background-color: #f3f3f3;
  border: 1px solid #e5e5e5;
  margin: 0 16px;

  img {
    width: 100%;
  }
`;

export const DivControls = styled.div`
  height: 33px;
  width: 292px;
  display: flex;
  flex-direction: row;
  margin-bottom: 27px;
  justify-content: space-between;
`;

export const Control = styled.h1`
  font-family: "DosisMedium";
  font-size: 18px;
  line-height: 22px;
  color: #000;
  border-bottom: ${(props) => (props.active ? "3px solid #000" : "none")};
  width: "30%";
  text-transform: uppercase;
  cursor: pointer;
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
  content: "Teste";
  display: flex;
  align-items: center;
  background-color: transparent;
  color: ${colors.white};
  position: absolute;
  z-index: 999;
  left: 0;
  top: 50%;
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
  top: 50%;
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

export const DivProduto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 385px;
  height: 648px;
  background-color: #f3f3f3;
  border: 1px solid #e5e5e5;
  margin: 0 16px 48px 16px;
  padding: 26px 32px 42px 32px;

  img {
    width: 354px;
    height: 354px;
  }
`;
