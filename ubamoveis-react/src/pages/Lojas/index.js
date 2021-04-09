import React, { useState } from "react";
import Select from "react-select";
import { FaWhatsapp as WhatsApp } from "react-icons/fa";

import Menu from "../../components/Menu";
import BannerInterna from "../../components/BannerInterna";
import Newsletter from "../../components/Newsletter";
import NossasLojas from "../../components/NossasLojas";
import Footer from "../../components/Footer";

import {
  DivUnidades,
  TituloUnidades,
  Descricao,
  Separator,
  Unidades,
  CidadeTelefone,
  Telefone,
  EnderecoLoja,
  NomeLoja,
  Content,
  QrCodeZap,
  Iframe,
} from "./styles";

import LojasImg from "../../assets/images/lojas_interna.png";
import qrVoltaRedonda from "../../assets/images/qr_voltaredonda.jpeg";
import qrBarraDoPirai from "../../assets/images/qr_barradopirai.jpeg";
import qrBarraMansa from "../../assets/images/qr_barramansa.jpeg";

export default function Lojas() {
  const cidadeOptions = [
    {
      label: "Volta Redonda",
      value: "(24) 99317-9372",
    },
    {
      label: "Barra Mansa",
      value: "(24) 99318-4972",
    },
    {
      label: "Barra do Piraí",
      value: "(24) 99317-8979",
    },
  ];

  const [cidade, setCidade] = useState(cidadeOptions[0].value);
  const [cidadeLabel, setCidadeLabel] = useState(cidadeOptions[0].label);

  const { innerWidth: width } = window;

  function handleCidade(value) {
    switch (value.label) {
      case "Volta Redonda":
        setCidade("(24) 99317-9372");
        setCidadeLabel("Volta Redonda");
        break;
      case "Barra Mansa":
        setCidade("(24) 99318-4972");
        setCidadeLabel("Barra Mansa");
        break;
      case "Barra do Piraí":
        setCidade("(24) 99317-8979");
        setCidadeLabel("Barra do Piraí");
        break;
      default:
        setCidade("(24) 99317-9372");
        setCidadeLabel("Volta Redonda");
        break;
    }
  }

  return (
    <>
      <Menu />
      <BannerInterna
        image={LojasImg}
        title="Nossas Lojas"
        text="Conheça as lojas Ubá."
      />
      <DivUnidades>
        <Content>
          <Unidades>
            <TituloUnidades>Unidades</TituloUnidades>
            <Separator />
            <Descricao>Encontre a Ubá mais perto de você!</Descricao>
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

            <NomeLoja>{cidadeLabel}</NomeLoja>
            {cidadeLabel === "Volta Redonda" ? (
              <EnderecoLoja>
                Rua Gustavo Lira, 14, Centro, Volta Redonda, RJ <br /> CEP:
                27253-280
              </EnderecoLoja>
            ) : cidadeLabel === "Barra Mansa" ? (
              <EnderecoLoja>
                Rua Lacyr Schetino, 46, 9 de Abril, Barra Mansa - RJ <br />
                CEP: 27335-270
              </EnderecoLoja>
            ) : (
              <EnderecoLoja>
                R. Luís Barbosa, 374 - Matadouro, Barra do Piraí - RJ <br />
                CEP: 27115-000
              </EnderecoLoja>
            )}

            <CidadeTelefone>
              <WhatsApp color="#F7BF3B" size={17} />
              <Telefone>{cidade}</Telefone>
            </CidadeTelefone>

            <QrCodeZap
              src={
                cidadeLabel === "Volta Redonda"
                  ? qrVoltaRedonda
                  : cidadeLabel === "Barra Mansa"
                  ? qrBarraMansa
                  : qrBarraDoPirai
              }
            />
          </Unidades>

          <div>
            {cidadeLabel === "Volta Redonda" ? (
              <Iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1842.8756359613847!2d-44.09525609186238!3d-22.513513418506143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9ea2a74fd24105%3A0x61ca8bbbde02ba80!2zVWLDoSBNw7N2ZWlz!5e0!3m2!1spt-BR!2sbr!4v1617928610772!5m2!1spt-BR!2sbr"
                height={
                  width < 980 && width > 660
                    ? "300px"
                    : width < 660
                    ? "250px"
                    : "500px"
                }
                width={
                  width < 980 && width > 660
                    ? "500px"
                    : width < 660
                    ? "300px"
                    : "800px"
                }
              />
            ) : cidadeLabel === "Barra Mansa" ? (
              <Iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58959.28811518679!2d-44.14880692028493!3d-22.543339398161653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9e989318f30e29%3A0xa122f56b2d0c267d!2zVWLDoSBNw7N2ZWlzIEV4dHJh!5e0!3m2!1spt-BR!2sbr!4v1617929051472!5m2!1spt-BR!2sbr"
                height={
                  width < 980 && width > 660
                    ? "300px"
                    : width < 660
                    ? "250px"
                    : "500px"
                }
                width={
                  width < 980 && width > 660
                    ? "500px"
                    : width < 660
                    ? "300px"
                    : "800px"
                }
              />
            ) : (
              <Iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.110823817711!2d-43.827588484894456!3d-22.462469327814638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9eb50bcee26519%3A0x54d89b5203b39455!2sUba%20M%C3%B3veis!5e0!3m2!1spt-BR!2sbr!4v1617929501256!5m2!1spt-BR!2sbr"
                height={
                  width < 980 && width > 660
                    ? "300px"
                    : width < 660
                    ? "250px"
                    : "500px"
                }
                width={
                  width < 980 && width > 660
                    ? "500px"
                    : width < 660
                    ? "300px"
                    : "800px"
                }
              />
            )}
          </div>
        </Content>
      </DivUnidades>
      <Newsletter />
      <NossasLojas />
      <Footer />
    </>
  );
}
