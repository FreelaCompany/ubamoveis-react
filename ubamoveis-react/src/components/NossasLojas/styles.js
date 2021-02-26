import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
  padding: 70px 0 80px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Titulo = styled.h1`
  color: #fff;
  font-family: "DosisLight";
  font-size: 36px;
  line-height: 46px;
`;

export const TituloStrong = styled.span`
  color: #fff;
  font-family: "DosisSemiBold";
  font-size: 36px;
  line-height: 46px;
`;

export const Separator = styled.div`
  width: 88px;
  height: 6px;
  background-color: #f4b828;
  margin: 12px 0 58px 0;
`;

export const DivLojas = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 818px;

  @media (max-width: 1099px) {
    flex-direction: column;
    width: unset;
  }
`;

export const Loja = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 246px;
  height: 260px;

  @media (max-width: 1099px) {
    height: 260px;
    margin: 20px 0;
  }
`;

export const NomeLoja = styled.h1`
  color: #c1c1c1;
  font-family: "DosisSemiBold";
  font-size: 24px;
  line-height: 31px;
`;

export const EnderecoLoja = styled.p`
  color: #b8b8b8;
  font-family: "SourceSansProRegular";
  font-size: 16px;
  line-height: 20px;
`;

export const WhatsappLoja = styled.a`
  color: #fff;
  font-family: "DosisBold";
  font-size: 18px;
  line-height: 22px;
`;

export const SeparatorLarge = styled.span`
  background-color: rgba(255, 255, 255, 0.18);
  height: 1px;
  width: 90%;
  max-width: 818px;
  margin: 50px 0 40px 0;
`;

export const DivPagamento = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 818px;
  height: 82px;

  @media (max-width: 1099px) {
    flex-direction: column;
    width: 90%;

    img {
      width: 90% !important;
    }
  }
`;

export const TituloPagamento = styled.p`
  color: #fff;
  font-family: "DosisBold";
  font-size: 18px;
  line-height: 22px;
  text-align: center;
`;

export const QrCodeZap = styled.img`
  width: 150px;
  height: 150px;
  margin: 10px 0 10px 0;
  border-radius: 7px;
`;

export const DivImgPagamento = styled.div`
  text-align: center;
  width: 90%;
  margin: 10px 0 10px 0;

  p {
    font-size: 14px;
    line-height: 18px;
  }
`;
