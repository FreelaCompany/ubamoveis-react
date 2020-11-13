import styled from "styled-components";

export const ContainerProduto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 415px;
  height: 648px;
  background-color: #f3f3f3;
  border: 1px solid #e5e5e5;
  margin: 0 16px 48px 16px;
  padding: 26px 32px 42px 32px;

  img {
    width: 348px;
    height: 348px;
  }
`;

export const Separator = styled.div`
  height: 1px;
  width: 100%;
  background-color: #8a8a8a;
`;

export const SeparatorLight = styled.div`
  height: 1px;
  width: 100%;
  background-color: #d9d9d9;
`;

export const DivPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 0;
  height: 136px;
`;

export const Title = styled.h1`
  font-family: "DosisSemiBold";
  font-size: 22px;
  line-height: 28px;
  color: #000;
  text-transform: uppercase;
`;

export const Price = styled.h1`
  font-family: "SourceSansProSemiBold";
  font-size: 20px;
  line-height: 25px;
  color: #d24242;
  text-transform: uppercase;
`;

export const Valid = styled.p`
  font-family: "SourceSansProRegular";
  font-size: 16px;
  line-height: 20px;
  color: #737373;
  text-transform: uppercase;
  margin-top: 11px;
`;

export const DivBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-top: 25px;
  height: 60px;
`;

export const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 144px;
  height: 60px;
`;

export const Info = styled.p`
  font-family: "SourceSansProRegular";
  font-size: 16px;
  line-height: 20px;
  color: #737373;
`;

export const DivColors = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 138px;
  height: 54px;
`;

export const TitleColor = styled.h1`
  font-family: "SourceSansProBold";
  font-size: 15px;
  line-height: 19px;
  color: #000;
  text-transform: uppercase;
`;

export const Colors = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const Color = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-left: 6px;
  margin-right: 6px;

  &:first-child {
    margin-left: 0;
  }
`;
