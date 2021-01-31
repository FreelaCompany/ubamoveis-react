import styled from "styled-components";

export const DivTitulo = styled.div`
  width: 100%;
  margin-top: 64px;
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
  color: #000;
  font-family: "DosisLight";
  font-size: 36px;
  line-height: 46px;
  @media (max-width: 440px) {
    font-size: 30px;
  }
`;

export const TituloStrong = styled.span`
  color: #000;
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
  background-color: #f4b828;
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
