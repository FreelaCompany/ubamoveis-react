import styled from "styled-components";

export const Container = styled.div`
  height: 86px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 576px) {
    flex-direction: column;
    height: unset;
  }
`;

export const Content = styled.div`
  width: 90%;
  max-width: 1094px;
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 576px) {
    flex-direction: column;
    height: unset;
    margin: 20px 0;
  }
`;

export const Direitos = styled.p`
  color: #000;
  font-family: "SourceSansProSemiBold";
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  @media (max-width: 576px) {
    margin-bottom: 20px;
  }
`;

export const Dev = styled.p`
  color: #000;
  font-family: "SourceSansProRegular";
  font-size: 14px;
  line-height: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 220px;
`;
