import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  width: 100%;
  background-color: ${colors.weston};
  padding: 80px 140px;

  @media (max-width: 1200px) {
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Content = styled.div`
  max-width: 1228px;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 385px;
  max-height: 385px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    height: unset;
    max-height: unset;
    display: flex;
    width: 80%;
    justify-content: center;
    padding: 40px 0;
  }
`;

export const Titulo = styled.h1`
  font-family: "DosisBold";
  font-size: 36px;
  line-height: 46px;
  color: ${colors.black};
`;

export const SubTitulo = styled.p`
  font-family: "DosisSemiBold";
  font-size: 24px;
  line-height: 31px;
  color: ${colors.pumpkinLight1};

  @media (max-width: 1200px) {
    width: 100%;
    text-align: justify;
  }
`;

export const Paragraph = styled.p`
  font-family: "SourceSansProRegular";
  font-size: 16px;
  line-height: 20px;
  color: ${colors.black};
  margin-top: 24px;
  width: 340px;

  &:nth-child(5) {
    margin-top: 125px;
  }

  &:last-child {
    margin: 0;
  }

  @media (max-width: 1200px) {
    width: 100%;
    text-align: justify;
    &:nth-child(5) {
      margin-top: 0;
    }

    &:last-child {
      margin: 0;
    }
  }
`;

export const TituloFrete = styled.h1`
  font-family: "DosisBold";
  font-size: 36px;
  line-height: 40px;
  color: ${colors.black};
  width: 386px;
  height: 86px;

  @media (max-width: 1200px) {
    width: 100%;
    margin-top: 20px;
    height: unset;
  }
`;

export const DivList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 31px 0 24px 0;
`;

export const ItemList = styled.p`
  color: ${colors.pumpkinLight2};
  font-family: "SourceSansProRegular";
  font-size: 18px;
  line-height: 23px;
`;
