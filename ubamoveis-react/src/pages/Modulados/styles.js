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

export const Paragraph = styled.p`
  font-family: "SourceSansProRegular";
  font-size: 16px;
  line-height: 20px;
  color: #000;
  margin-bottom: 24px;
  width: 90%;
  max-width: 545px;

  @media (max-width: 1200px) {
    text-align: center;
  }
`;

export const DivSobre = styled.div`
  width: 90%;
  max-width: 1090px;
  height: 200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  @media (max-width: 1200px) {
    justify-content: center;
    height: auto;
  }
`;

export const SeparatorLight = styled.div`
  height: 1px;
  width: 90%;
  max-width: 1090px;
  background-color: #d9d9d9;
  margin: 56px auto 31px auto;
`;

export const DivVantagens = styled.div`
  width: 90%;
  max-width: 1090px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 40px;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
`;

export const TituloVantagens = styled.h1`
  font-family: "DosisBold";
  font-size: 24px;
  line-height: 31px;
  text-transform: uppercase;
  color: #000;
  margin-bottom: 12px;
`;

export const LinhaVantagens = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const Vantagem = styled.p`
  font-family: "DosisSemiBold";
  font-size: 18px;
  line-height: 26px;
  color: #747474;
  text-align: center;
`;

export const ImgVantagem = styled.img`
  width: 20px;
  height: 14px;
  margin: 10px 15px;
  @media (max-width: 720px) {
    display: none;
  }
`;

export const ImgVantagem2 = styled.img`
  width: 14px;
  height: 20px;
  margin: 6px 10px;
  @media (min-width: 721px) {
    display: none;
  }
`;

export const DivControls = styled.div`
  height: 33px;
  display: flex;
  width: 90%;
  max-width: 460px;
  flex-direction: row;
  margin-bottom: 27px;
  justify-content: space-between;
`;

export const Control = styled.h1`
  font-family: "DosisMedium";
  font-size: 18px;
  line-height: 22px;
  color: #000;
  margin: 0 17px;
  border-bottom: ${(props) => (props.active ? "3px solid #000" : "none")};
  text-transform: uppercase;
  cursor: pointer;

  @media (max-width: 570px) {
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    height: fit-content;
    margin: 0 12px 5px 12px;
  }
`;

export const TagError = styled.p`
  font-family: "DosisSemiBold";
  font-size: 18px;
  line-height: 26px;
  color: #747474;
  text-align: center;
  margin: 20px;
`;
