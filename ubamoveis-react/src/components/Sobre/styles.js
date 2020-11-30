import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #f3f3f3;
  padding: 80px 140px;
`;

export const Content = styled.div`
  max-width: 1228px;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 385px;
  max-height: 385px;
`;

export const Titulo = styled.h1`
  font-family: "DosisBold";
  font-size: 36px;
  line-height: 46px;
  color: #000;
`;

export const SubTitulo = styled.p`
  font-family: "DosisSemiBold";
  font-size: 24px;
  line-height: 31px;
  color: #d9a423;
`;

export const Paragraph = styled.p`
  font-family: "SourceSansProRegular";
  font-size: 16px;
  line-height: 20px;
  color: #000;
  margin-top: 24px;
  width: 340px;

  &:nth-child(5) {
    margin-top: 125px;
  }

  &:last-child {
    margin: 0;
  }
`;

export const TituloFrete = styled.h1`
  font-family: "DosisBold";
  font-size: 36px;
  line-height: 40px;
  color: #000;
  width: 386px;
  height: 86px;
`;

export const DivList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 31px 0 24px 0;
`;

export const ItemList = styled.p`
  color: #b48b28;
  font-family: "SourceSansProRegular";
  font-size: 18px;
  line-height: 23px;
`;
