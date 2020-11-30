import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 277px;
  background-color: #ce3f3f;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 997px;
  height: 125px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LabelInput = styled.p`
  width: 378px;
  height: 46px;
  color: #fff;
  font-family: "SourceSansProRegular";
  font-size: 18px;
  line-height: 23px;
`;

export const Input = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  input {
    width: 437px;
    height: 52px;
    padding: 15px;
    font-size: 16px;
    color: #000;
    font-weight: 600;
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
