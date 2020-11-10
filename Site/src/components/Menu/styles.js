import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 125px;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 200px;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Logo = styled.img`
  width: 183px;
  height: 65px;
`;

export const DivLeft = styled.div`
  display: flex;
  justify-content: center;
`;

export const LinkLeft = styled(Link)`
  margin: 12px 0 0 25px;
  color: #fff;
  text-transform: uppercase;
  font-family: "DosisMedium";
  font-size: 18px;
  line-height: 24px;
`;

export const DivRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  height: 100%;
`;

export const MenuRight = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LinkRight = styled(Link)`
  margin: 0 0 0 25px;
  color: #fff;
  font-family: "SourceSansProSemiBold";
  font-size: 16px;
  line-height: 20px;
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
    background-color: #000;
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
    color: #fff;
  }

  .selectCidade__menu {
    z-index: 99999;
  }
`;

export const ContatoText = styled.p`
  margin: 0 12px;
  color: #fff;
  font-family: "DosisMedium";
  font-size: 18px;
  line-height: 24px;
`;

export const NumeroSelecionado = styled.a`
  color: #f9c445;
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
`;

export const LinkSocial = styled.a`
  cursor: pointer;
`;
