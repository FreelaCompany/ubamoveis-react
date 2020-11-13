import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 497px;
  max-height: 497px;
  padding: 80px 140px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  flex-wrap: wrap;
  background-color: #f3f3f3;
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
  width: 385px;

  &:nth-child(5) {
    margin-top: 60px;
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
