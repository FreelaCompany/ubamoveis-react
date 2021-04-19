import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  width: 100%;
  margin: 48px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 376px) {
    width: 100%;
    text-align: center;
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

export const Obs = styled.p`
  margin-top: 40px;
  font-family: "SourceSansProRegular";
  font-size: 16px;
  line-height: 20px;
  color: ${colors.mediumGray};
  width: 90%;
  text-align: center;
`;
