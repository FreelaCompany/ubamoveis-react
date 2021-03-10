import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 277px;
  background-color: #ce3f3f;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1099px) {
    height: unset;
    padding: 40px 0;
  }
`;

export const Content = styled.div`
  width: 997px;
  height: 125px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  img {
    max-width: 323px;
    width: 90%;
    height: 125px;
  }

  @media (max-width: 1099px) {
    width: 90%;
    img {
      max-width: 323px;
      width: 90%;
      height: 125px;
      object-fit: contain;
    }
    flex-direction: column;
    height: unset;
    justify-content: center;
    align-items: center;
  }
`;

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1099px) {
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const LabelInput = styled.p`
  width: 378px;
  /* height: 46px;
  color: #fff;
  font-family: "SourceSansProRegular";
  font-size: 18px;
  line-height: 23px; */


    color: #fff;
    font-family: 'DosisSemiBold';
    font-size: 21px;
    line-height: 24px;
    align-self: center;
}

  @media (max-width: 1099px) {
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    margin-top: 20px;
    width: 90%;
  }
`;

export const Input = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1099px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: 500px;

    input {
      width: 100% !important;
      margin-top: 20px;
      margin-bottom: 20px;
      font-weight: 400;
      font-family: "SourceSansProRegular";
    }

    button {
      margin: 0 !important;
    }
  }

  input {
    width: 437px;
    height: 52px;
    padding: 15px;
    font-size: 16px;
    color: #000;
    font-weight: 400;
    font-family: "SourceSansProRegular";
  }

  ::-webkit-input-placeholder {
    color: #fff;
  }

  ::-moz-placeholder {
    color: orange;
  }

  ::-moz-placeholder {
    color: orange;
  }

  ::-ms-input-placeholder {
    color: orange;
  }

  button {
    width: 155px;
    height: 52px;
    background-color: #000;
    color: #fff;
    text-transform: uppercase;
    margin-left: 15px;
    font-family: "DosisBold";
    font-size: 18px;
    line-height: 23px;
  }
`;
