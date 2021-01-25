import React, { useState } from "react";
import {
  FaWhatsapp as WhatsApp,
  FaInstagram as Instagram,
  FaFacebookF as Facebook,
} from "react-icons/fa";
import Select from "react-select";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";

import {
  Container,
  ContentDesktop,
  ContentMobile,
  IconMenu,
  MenuMobile,
  DivContatoNumero,
  IconMenuClose,
  Logo,
  DivLeft,
  LinkLeft,
  DivRight,
  MenuRight,
  LinkRight,
  ContatoRight,
  ContatoText,
  NumeroSelecionado,
  DivSociais,
  LinkSocial,
} from "./styles";

import logoMenu from "../../assets/images/logo_menu.png";

export default function Menu() {
  const cidadeOptions = [
    { label: "Volta Redonda", value: "(24) 99317-9372" },
    { label: "Barra Mansa", value: "(24) 99318-4972" },
    { label: "Barra do Piraí", value: "(24) 99317-8979" },
    { label: "Bebê e Colchões", value: "(24) 99317-8064" },
  ];
  const [cidade, setCidade] = useState(cidadeOptions[0].value);
  const [cidadeLabel, setCidadeLabel] = useState(cidadeOptions[0].label);
  const [linkWhats, setLinkWhats] = useState("https://wa.me/5524993179372");
  const [menuMobile, setMenuMobile] = useState(false);

  function handleCidade(value) {
    switch (value.label) {
      case "Volta Redonda":
        setCidade("(24) 99317-9372");
        setCidadeLabel("Volta Redonda");
        setLinkWhats("https://wa.me/5524993179372");
        break;
      case "Barra Mansa":
        setCidade("(24) 99318-4972");
        setCidadeLabel("Barra Mansa");
        setLinkWhats("https://wa.me/5524993184972");
        break;
      case "Barra do Piraí":
        setCidade("(24) 99317-8979");
        setCidadeLabel("Barra do Piraí");
        setLinkWhats("https://wa.me/5524993178979");
        break;
      case "Bebê e Colchões":
        setCidade("(24) 99317-8064");
        setCidadeLabel("Bebê e Colchões");
        setLinkWhats("https://wa.me/5524993178064");
        break;
      default:
        setCidade("(24) 99317-9372");
        setCidadeLabel("Volta Redonda");
        setLinkWhats("https://wa.me/5524993179372");
        break;
    }
  }

  return menuMobile ? (
    <MenuMobile>
      <IconMenuClose onClick={() => setMenuMobile(!menuMobile)}>
        <AiOutlineCloseCircle color="#fff" size={32} />
      </IconMenuClose>
      <DivLeft>
        <LinkLeft to="/moveis">móveis</LinkLeft>
        <LinkLeft to="/modulados">modulados</LinkLeft>
        <LinkLeft to="/colchoes">colchões</LinkLeft>
      </DivLeft>
      <DivRight>
        <MenuRight>
          <LinkRight to="/sobre">Sobre nós</LinkRight>
          <LinkRight to="/lojas">Nossas Lojas</LinkRight>
          <LinkRight to="/trabalhe_conosco">Trabalhe Conosco</LinkRight>
        </MenuRight>
        <DivContatoNumero>
          <ContatoRight>
            <WhatsApp color="#F7BF3B" size={17} />
            <ContatoText>Contato:</ContatoText>
            <Select
              name="cidade"
              placeholder={cidadeLabel}
              className="selectCidade"
              classNamePrefix="selectCidade"
              options={cidadeOptions}
              onChange={(value) => {
                handleCidade(value);
              }}
              value={cidade}
            />
          </ContatoRight>
          <NumeroSelecionado href={linkWhats} target="_blank">
            {cidade}
          </NumeroSelecionado>
        </DivContatoNumero>
        <DivSociais>
          <LinkSocial href="https://www.instagram.com/lojaubamoveis/?hl=pt-br">
            <Instagram color="#fff" size={18} />
          </LinkSocial>
          <LinkSocial href="https://www.facebook.com/lojaubamoveis/">
            <Facebook color="#fff" size={18} />
          </LinkSocial>
        </DivSociais>
      </DivRight>
    </MenuMobile>
  ) : (
    <Container>
      <ContentDesktop>
        <DivLeft>
          <Link to="/">
            <Logo src={logoMenu} />
          </Link>
          <LinkLeft to="/moveis">móveis</LinkLeft>
          <LinkLeft to="/modulados">modulados</LinkLeft>
          <LinkLeft to="/colchoes">colchões</LinkLeft>
        </DivLeft>
        <DivRight>
          <MenuRight>
            <LinkRight to="/sobre">Sobre nós</LinkRight>
            <LinkRight to="/lojas">Nossas Lojas</LinkRight>
            <LinkRight to="/trabalhe_conosco">Trabalhe Conosco</LinkRight>
          </MenuRight>
          <ContatoRight>
            <WhatsApp color="#F7BF3B" size={17} />
            <ContatoText>Contato:</ContatoText>
            <Select
              name="cidade"
              placeholder={cidadeLabel}
              className="selectCidade"
              classNamePrefix="selectCidade"
              options={cidadeOptions}
              onChange={(value) => {
                handleCidade(value);
              }}
              value={cidade}
            />
            <NumeroSelecionado href={linkWhats} target="_blank">
              {cidade}
            </NumeroSelecionado>
            <DivSociais>
              <LinkSocial href="https://www.instagram.com/lojaubamoveis/?hl=pt-br">
                <Instagram color="#fff" size={18} />
              </LinkSocial>
              <LinkSocial href="https://www.facebook.com/lojaubamoveis/">
                <Facebook color="#fff" size={18} />
              </LinkSocial>
            </DivSociais>
          </ContatoRight>
        </DivRight>
      </ContentDesktop>
      <ContentMobile>
        <Link to="/">
          <Logo src={logoMenu} />
        </Link>
        <IconMenu onClick={() => setMenuMobile(!menuMobile)}>
          <FaBars color="#fff" size={25} />
        </IconMenu>
      </ContentMobile>
    </Container>
  );
}
