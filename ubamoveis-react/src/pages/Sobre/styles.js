import styled from "styled-components";
import { colors } from "../../styles/colors";

export const DivTitulo = styled.div`
  width: 90%;
  height: 135px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px auto;

  @media (max-width: 440px) {
    margin: 30px auto;
  }
`;

export const Titulo = styled.h1`
  color: ${colors.black};
  font-family: "DosisLight";
  font-size: 36px;
  line-height: 46px;
  text-align: center;
  @media (max-width: 440px) {
    font-size: 30px;
  }
`;

export const TituloStrong = styled.span`
  color: ${colors.black};
  font-family: "DosisBold";
  font-size: 36px;
  line-height: 46px;
  text-align: center;

  @media (max-width: 440px) {
    font-size: 30px;
    line-height: 40px;
  }
`;

export const Separator = styled.div`
  width: 88px;
  height: 6px;
  background-color: ${colors.pumpkin};
  margin: 16px 0 16px 0;
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

export const Paragraph = styled.p`
  font-family: "SourceSansProRegular";
  font-size: 16px;
  line-height: 20px;
  color: ${colors.black};
  margin-bottom: 24px;
  width: 90%;
  max-width: 385px;

  @media (max-width: 1100px) {
    text-align: center;
  }
`;

export const DivSobre = styled.div`
  width: 90%;
  max-width: 810px;
  height: 290px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;

  @media (max-width: 1100px) {
    justify-content: center;
    height: auto;
  }
`;
