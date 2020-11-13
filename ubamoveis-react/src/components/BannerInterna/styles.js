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
`;

export const Title = styled.h1`
  font-family: "DosisBold";
  font-size: 66px;
  line-height: 84px;
  color: #f4b828;
  text-transform: uppercase;
`;

export const Text = styled.p`
  font-family: "SourceSansProRegular";
  font-size: 18px;
  line-height: 23px;
  color: #e4e4e4;
  width: 311px;
  text-align: center;
  margin-top: 10px;
`;
