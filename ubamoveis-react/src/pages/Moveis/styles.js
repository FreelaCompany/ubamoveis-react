import styled from "styled-components";
import { colors } from "../../styles/colors";

export const DivTitulo = styled.div`
  width: 100%;
  height: 95px;
  margin-top: 64px;
  margin-bottom: 51px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 440px) {
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

export const Titulo = styled.h1`
  color: ${colors.black};
  font-family: "DosisLight";
  font-size: 36px;
  line-height: 46px;
  @media (max-width: 440px) {
    font-size: 30px;
  }
`;

export const TituloStrong = styled.span`
  color: ${colors.black};
  font-family: "DosisBold";
  font-size: 36px;
  line-height: 46px;

  @media (max-width: 440px) {
    font-size: 30px;
  }
`;

export const Separator = styled.div`
  width: 88px;
  height: 6px;
  background-color: ${colors.pumpkin};
  margin: 16px 0 24px 0;
`;

export const DivProdutos = styled.div`
  width: 100%;
  max-width: 1345px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
`;
