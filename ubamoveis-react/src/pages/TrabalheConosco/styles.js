import styled from "styled-components";
import { colors } from "../../styles/colors";

export const DivTitulo = styled.div`
  width: 100%;
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Titulo = styled.h1`
  color: ${colors.black};
  font-family: "DosisLight";
  font-size: 36px;
  line-height: 46px;
`;

export const TituloStrong = styled.span`
  color: ${colors.black};
  font-family: "DosisBold";
  font-size: 36px;
  line-height: 46px;
`;

export const Separator = styled.div`
  width: 88px;
  height: 6px;
  background-color: ${colors.pumpkin};
  margin: 16px 0 24px 0;
`;

export const DivForm = styled.div`
  width: 90%;
  max-width: 810px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 auto;

  .selectSexo {
    border-radius: 4px;
    background-color: transparent;
    color: ${colors.grayLight2};
    width: 100%;
    height: 60px;
  }

  .selectSexo__control {
    background-color: ${colors.white};
    border: 1px solid ${colors.grayLight7};
    box-shadow: none;
    width: 100%;
    height: 100%;

    &:hover {
      border: 1px solid ${colors.grayLight7};
    }
  }

  .selectSexo__indicator-separator {
    width: 0;
    margin: 0;
    padding: 0;
  }
  .selectSexo__value-container {
    padding: 0 0 0 12px;
  }

  .css-b8ldur-Input {
    margin: 0 !important;
    padding: 0 !important;
  }

  .selectSexo__menu {
    top: 58px;
    background-color: hsl(0, 0%, 100%);
    border-radius: 4px;
    box-shadow: 0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1);
    margin-bottom: 8px;
    margin-top: 0;
    position: absolute;
    width: 100%;
    z-index: 1;
    box-sizing: border-box;
    color: ${colors.black};
  }

  form {
    display: flex;
    flex-direction: column;

    input,
    textarea {
      padding: 16px;
      border-radius: 4px;
      border: 1px ${colors.grayLight7} solid;
      background-color: transparent;
      color: ${colors.black};
      width: 100%;
      height: 60px;
      margin-right: 16px;
      font-family: "SourceSansProRegular";
      font-size: 18px;
      line-height: 23px;

      &:last-child {
        margin-right: 0;
      }
      &::placeholder {
        color: ${colors.darkBlack};
      }
    }

    span {
      color: ${colors.redLight};
    }
  }
`;

export const SubTitulo = styled.p`
  font-family: "SourceSansProRegular";
  font-size: 18px;
  line-height: 23px;
  color: ${colors.black};

  margin-bottom: 33px;
  width: 90%;
  max-width: 389px;
  height: 50px;
  text-align: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 48%;
  margin-bottom: 8px;

  label {
    color: ${colors.black};
    font-family: "SourceSansProRegular";
    font-size: 18px;
    line-height: 23px;
  }

  @media (max-width: 575px) {
    width: 100%;
  }
`;

export const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;

  &:first-child {
    flex-direction: column;
    align-items: flex-start;
    label {
      color: ${colors.black};
      font-family: "SourceSansProRegular";
      font-size: 18px;
      line-height: 23px;
    }
  }

  &:nth-child(3) {
    flex-direction: column;
    align-items: flex-start;
    label {
      color: ${colors.black};
      font-family: "SourceSansProRegular";
      font-size: 18px;
      line-height: 23px;
    }
  }
  @media (max-width: 575px) {
    flex-direction: column;
  }
`;

export const Spinner = styled.span`
  animation: spin 1s linear infinite;
  font-size: 20px;
  width: 20px;
  height: 20px;
  color: ${colors.white} !important;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const ContainerInputFile = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 24px;
  position: relative;

  &:last-child {
    margin-right: 0;
  }

  label {
    font-family: "SourceSansProRegular";
    font-size: 18px;
    line-height: 23px;
    color: ${colors.black};
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    height: 48px;
    border-radius: 2px;
    border: 1px ${colors.stainlessSteelGrayLight} solid;
    padding: 16px;
    font-family: "SourceSansProRegular";
    font-size: 18px;
    line-height: 23px;
    color: ${colors.tealGray};
    background-color: ${colors.westonLight};
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.075);

    &[type="number"] {
      -moz-appearance: textfield;
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }

    &[disabled] {
      background-color: ${colors.disableLight};

      &::placeholder {
        content: "";
      }
    }
  }
`;

export const Arquivo = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  width: 100%;

  span {
    width: 78%;
    height: 60px;
    padding: 18px;
    border-radius: 4px;
    border: 1px ${colors.grayLight7} solid;
    font-family: "SourceSansProRegular";
    font-size: 18px;
    line-height: 23px;
    color: ${colors.tealGray} !important;
    background-color: ${colors.westonLight};
  }

  input.arquivo {
    background-color: ${colors.black};
    position: absolute;
    z-index: 9999;
    opacity: 0;
    cursor: pointer;
  }

  input.arquivo::before {
    content: "Escolha aqui";
    display: none;
  }

  button {
    width: 193px;
    background-color: ${colors.black};
    height: 60px;
    color: ${colors.white};
    font-family: "SourceSansProSemiBold";
    font-size: 18px;
    line-height: 23px;
  }

  @media (max-width: 384px) {
    span {
      font-size: 14px;
      padding: 8px;
    }
  }

  @media (min-width: 385px) and (max-width: 767px) {
    span {
      font-size: 14px;
      padding: 16px;
    }
  }
`;

export const SendButton = styled.button.attrs({
  type: "submit",
})`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  width: max-content;
  padding: 16px 24px;
  margin: 24px auto;
  border-radius: 3px;
  align-self: flex-start;
  background-color: ${colors.pumpkin};
  font-family: "DosisBold";
  font-size: 20px;
  line-height: 26px;
  text-transform: uppercase;
  color: ${colors.black};
  text-align: center;
  transition: 300ms ease;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 400px) {
    width: 100%;
    margin-top: 32px;
  }
`;
