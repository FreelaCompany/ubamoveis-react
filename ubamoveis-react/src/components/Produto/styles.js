import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ContainerProduto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 415px;
  height: 648px;
  background-color: ${colors.weston};
  margin: 0 16px 48px 16px;
  padding: 26px 32px 42px 32px;

  img {
    width: 348px;
    height: 348px;
  }

  @media (max-width: 320px) {
    width: 90%;
    max-width: 415px;
    height: 540px;
    padding: 26px 20px 42px 20px;

    img {
      width: 225px;
      height: 225px;
    }
  }

  @media (min-width: 321px) and (max-width: 575px) {
    width: 90%;
    max-width: 415px;
    height: 575px;

    img {
      width: 270px;
      height: 270px;
    }
  }
`;

export const Separator = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${colors.darkGray};
`;

export const SeparatorLight = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${colors.stainlessSteelGray};
  @media (max-width: 320px) {
    width: 90%;
  }
`;

export const DivPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 0;
  height: 136px;
  align-self: flex-start;
`;

export const Title = styled.h1`
  font-family: "DosisSemiBold";
  font-size: 22px;
  line-height: 28px;
  color: ${colors.black};
  text-transform: uppercase;

  @media (max-width: 320px) {
    font-size: 18px;
    line-height: 20px;
  }
`;

export const Price = styled.h1`
  font-family: "SourceSansProSemiBold";
  font-size: 20px;
  line-height: 25px;
  color: ${colors.redCrimson};
  text-transform: uppercase;
  @media (max-width: 320px) {
    font-size: 17px;
    line-height: 22px;
  }
`;

export const Valid = styled.p`
  font-family: "SourceSansProRegular";
  font-size: 16px;
  line-height: 20px;
  color: ${colors.mediumGray};
  text-transform: uppercase;
  margin-top: 11px;

  @media (max-width: 320px) {
    font-size: 13px;
    line-height: 16px;
  }
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

  @media (max-width: 380px) {
    height: 50px;
  }
`;

export const Info = styled.p`
  font-family: "SourceSansProRegular";
  font-size: 16px;
  line-height: 20px;
  color: ${colors.mediumGray};

  @media (max-width: 380px) {
    font-size: 13px;
    line-height: 17px;
  }
`;

export const DivColors = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 140px;
  height: 54px;

  @media (max-width: 320px) {
    width: 145px;
  }

  @media (min-width: 321px) and (max-width: 380px) {
    font-size: 12px;
    height: 40px;
  }
`;

export const TitleColor = styled.h1`
  font-family: "SourceSansProBold";
  font-size: 15px;
  line-height: 19px;
  color: ${colors.black};
  text-transform: uppercase;

  @media (max-width: 380px) {
    font-size: 12px;
    line-height: 16px;
  }
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

  @media (max-width: 380px) {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin-left: 3px;
    margin-right: 3px;
  }

  &:first-child {
    margin-left: 0;
  }
`;
