import styled from "styled-components";

export const TituloUnidades = styled.h1`
  color: #000;
  font-family: "DosisBold";
  font-size: 36px;
  line-height: 46px;
`;

export const Descricao = styled.span`
  color: #000;
  font-family: "SourceSansProRegular";
  font-size: 18px;
  line-height: 23px;
  margin-bottom: 27px;
`;

export const Separator = styled.div`
  width: 88px;
  height: 6px;
  background-color: #f4b828;
  margin: 16px 0 24px 0;
`;

export const DivUnidades = styled.div`
  width: 100%;
  padding: 60px 140px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Unidades = styled.div`
  width: 385px;
  height: 405px;
  display: flex;
  flex-direction: column;

  .selectCidade {
    width: 305px;
    height: 52px;
    margin-bottom: 44px;
  }

  .selectCidade__control {
    background-color: #fff;
    border: 1px solid #b8b8b8;
    box-shadow: none;
    border-radius: 0;
  }

  .selectCidade__indicator-separator {
    width: 0;
    margin: 0;
    padding: 0;
  }

  .selectCidade__placeholder {
    color: #000;
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
  color: #000;
  font-family: "DosisMedium";
  font-size: 18px;
  line-height: 24px;
`;

export const EnderecoLoja = styled.p`
  width: 246px;
  height: 60px;
  color: #000;
  font-family: "SourceSansProRegular";
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 32px;
`;

export const NomeLoja = styled.h1`
  color: #000;
  font-family: "DosisSemiBold";
  font-size: 26px;
  line-height: 33px;
  margin-bottom: 17px;
`;
