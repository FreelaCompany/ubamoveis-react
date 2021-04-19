import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  width: 100%;
  height: 125px;
  background-color: ${colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentDesktop = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 65px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 1064px) {
    display: none;
  }
  @media (min-width: 1065px) and (max-width: 1199px) {
    width: 90%;
    max-width: 1100px;
    height: 65px;
    display: flex;
  }
`;

export const MenuMobile = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${colors.black};
  padding: 10% 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 9999;
`;

export const ContentMobile = styled.div`
  width: 90%;
  max-width: 1100px;
  height: 65px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  display: none;

  @media (max-width: 1064px) {
    display: flex;
    a {
      height: -webkit-fill-available;
    }
  }
  @media (min-width: 1065px) and (max-width: 1199px) {
    display: none;
  }
`;

export const IconMenu = styled.span`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconMenuClose = styled.span`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 30px;
  top: 30px;
`;

export const Logo = styled.img`
  width: 183px;
  height: 65px;
`;

export const DivLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1064px) {
    height: 120px;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }
`;

export const LinkLeft = styled(Link)`
  margin: 0 0 0 25px;
  color: ${colors.white};
  text-transform: uppercase;
  font-family: "DosisMedium";
  font-size: 18px;
  line-height: 24px;

  @media (max-width: 1064px) {
    margin: 0 !important;
  }
`;

export const DivRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  height: 100%;

  @media (max-width: 1064px) {
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    height: 60%;
  }
`;

export const MenuRight = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1064px) {
    height: 120px;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
  }
`;

export const LinkRight = styled(Link)`
  margin: 0 0 0 25px;
  color: ${colors.white};
  font-family: "SourceSansProSemiBold";
  font-size: 16px;
  line-height: 20px;

  @media (max-width: 1064px) {
    margin: 0 !important;
  }
`;

export const DivContatoNumero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContatoRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .selectCidade {
    width: 170px;
    height: 35px;
  }

  .selectCidade__control {
    background-color: ${colors.black};
    border: none;
    box-shadow: none;
    height: unset;

    &:hover {
      border: none;
    }
  }

  .selectCidade__indicator-separator {
    width: 0;
    margin: 0;
    padding: 0;
  }

  .selectCidade__placeholder {
    color: ${colors.white};
  }

  .selectCidade__menu {
    z-index: 99999;
  }
`;

export const ContatoText = styled.p`
  margin: 0 12px;
  color: ${colors.white};
  font-family: "DosisMedium";
  font-size: 18px;
  line-height: 24px;
`;

export const NumeroSelecionado = styled.a`
  color: ${colors.pumpkinLight};
  font-family: "DosisMedium";
  font-size: 18px;
  line-height: 24px;
`;

export const DivSociais = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 22px;
  width: 50px;

  @media (max-width: 1064px) {
    margin: 0 !important;
  }
`;

export const LinkSocial = styled.a`
  cursor: pointer;
`;
