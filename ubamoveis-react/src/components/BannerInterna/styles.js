import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 351px;
  background: ${({ url }) =>
    url ? `url(${url}) no-repeat center center;` : `none`};
  background-size: cover;

  @media (max-width: 575px) {
    height: 265px;
  }
`;

export const Title = styled.h1`
  font-family: "DosisBold";
  font-size: 66px;
  line-height: 84px;
  color: #f4b828;
  text-transform: uppercase;
  text-align: center;

  @media (max-width: 320px) {
    font-size: 45px;
    line-height: 55px;
  }

  @media (min-width: 321px) and (max-width: 575px) {
    font-size: 54px;
    line-height: 68px;
  }
`;

export const Text = styled.p`
  font-family: "SourceSansProRegular";
  font-size: 18px;
  line-height: 23px;
  color: #e4e4e4;
  width: 320px;
  text-align: center;
  margin-top: 10px;

  @media (max-width: 320px) {
    width: 90%;
    font-size: 16px;
    line-height: 20px;
  }
`;
