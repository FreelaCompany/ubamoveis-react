import styled from "styled-components";
import { colors } from "../../styles/colors";

export const TituloUnidades = styled.h1`
  color: ${colors.black};
  font-family: "DosisBold";
  font-size: 36px;
  line-height: 46px;

  @media (max-width: 440px) {
    font-size: 30px;
    line-height: 40px;
  }
`;

export const Descricao = styled.span`
  color: ${colors.black};
  font-family: "SourceSansProRegular";
  font-size: 18px;
  line-height: 23px;
  margin-bottom: 27px;
`;

export const Separator = styled.div`
  width: 88px;
  height: 6px;
  background-color: ${colors.pumpkin};
  margin: 16px 0 24px 0;
`;

export const DivUnidades = styled.div`
  width: 100%;
  padding: 40px 0;
`;

export const Content = styled.div`
  width: 90%;
  max-width: 1228px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Unidades = styled.div`
  width: 90%;
  max-width: 385px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    margin-bottom: 40px;
  }

  .selectCidade {
    width: 90%;
    max-width: 305px;
    height: 52px;
    margin-bottom: 44px;
  }

  .selectCidade__control {
    background-color: ${colors.white};
    border: 1px solid ${colors.grayLight6};
    box-shadow: none;
    border-radius: 0;
  }

  .selectCidade__indicator-separator {
    width: 0;
    margin: 0;
    padding: 0;
  }

  .selectCidade__placeholder {
    color: ${colors.black};
  }

  .selectCidade__menu {
    top: 40px;
    background-color: hsl(0, 0%, 100%);
    border-radius: 4px;
    box-shadow: 0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1);
    margin-bottom: 8px;
    margin-top: 0;
    position: absolute;
    width: 100%;
    z-index: 1;
    box-sizing: border-box;
  }
`;

export const CidadeTelefone = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const Telefone = styled.p`
  margin: 0 12px;
  color: ${colors.black};
  font-family: "DosisMedium";
  font-size: 18px;
  line-height: 24px;
`;

export const EnderecoLoja = styled.p`
  width: 246px;
  height: 60px;
  color: ${colors.black};
  font-family: "SourceSansProRegular";
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 32px;
`;

export const NomeLoja = styled.h1`
  color: ${colors.black};
  font-family: "DosisSemiBold";
  font-size: 26px;
  line-height: 33px;
  margin-bottom: 17px;
`;

export const QrCodeZap = styled.img`
  width: 150px;
  height: 150px;
  margin: 10px 0 10px 0;
  border-radius: 7px;
`;


export const Iframe = styled.iframe`
  height: ${props=> props.height}; 
  width: ${props=> props.width};
  border: none;
`; 