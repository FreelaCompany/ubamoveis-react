import React, { useState } from "react";
import {
  FaWhatsapp as WhatsApp,
  FaInstagram as Instagram,
  FaFacebookF as Facebook,
} from "react-icons/fa";
import Select from "react-select";
import { Link } from "react-router-dom";

import {
  Container,
  Content,
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
    }
  }

  return (
    <Container>
      <Content>
        <DivLeft>
          <Link to="/">
            <Logo src={logoMenu} />
          </Link>
          <LinkLeft to="/moveis">móveis</LinkLeft>
          <LinkLeft>modulados</LinkLeft>
          <LinkLeft to="/colchoes">colchões</LinkLeft>
        </DivLeft>
        <DivRight>
          <MenuRight>
            <LinkRight to="/sobre">Sobre nós</LinkRight>
            <LinkRight>Nossas Lojas</LinkRight>
            <LinkRight>Trabalhe Conosco</LinkRight>
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
              <LinkSocial href="https://www.instagram.com/">
                <Instagram color="#fff" size={18} />
              </LinkSocial>
              <LinkSocial href="https://www.instagram.com/">
                <Facebook color="#fff" size={18} />
              </LinkSocial>
            </DivSociais>
          </ContatoRight>
        </DivRight>
      </Content>
    </Container>
  );
}
