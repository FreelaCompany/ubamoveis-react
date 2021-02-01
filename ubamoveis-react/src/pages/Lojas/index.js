import React, { useState } from "react";

import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
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
} from "./styles";

import LojasImg from "../../assets/images/lojas_interna.png";

export default function Lojas() {
  const cidadeOptions = [
    {
      label: "Volta Redonda",
      value: "(24) 99317-9372",
      location: {
        lat: -22.5136835,
        lng: -44.0956295,
      },
    },
    {
      label: "Barra Mansa",
      value: "(24) 99318-4972",
      location: {
        lat: -22.543474,
        lng: -44.1138613,
      },
    },
    {
      label: "Barra do Piraí",
      value: "(24) 99317-8979",
      location: {
        lat: -22.4624814,
        lng: -43.8255285,
      },
    },
  ];

  const [cidade, setCidade] = useState(cidadeOptions[0].value);
  const [cidadeLabel, setCidadeLabel] = useState(cidadeOptions[0].label);
  const [cidadeLocation, setCidadeLocation] = useState(
    cidadeOptions[0].location
  );
  const [selected, setSelected] = useState({});

  const { innerWidth: width } = window;

  const onSelect = (item) => {
    setSelected(item);
  };
  const mapStyles = {
    height:
      width < 980 && width > 660 ? "300px" : width < 660 ? "250px" : "500px",
    width:
      width < 980 && width > 660 ? "500px" : width < 660 ? "300px" : "800px",
  };

  console.log(width);

  function handleCidade(value) {
    switch (value.label) {
      case "Volta Redonda":
        setCidade("(24) 99317-9372");
        setCidadeLabel("Volta Redonda");
        setCidadeLocation(value.location);
        break;
      case "Barra Mansa":
        setCidade("(24) 99318-4972");
        setCidadeLabel("Barra Mansa");
        setCidadeLocation(value.location);
        break;
      case "Barra do Piraí":
        setCidade("(24) 99317-8979");
        setCidadeLabel("Barra do Piraí");
        setCidadeLocation(value.location);
        break;
      default:
        setCidade("(24) 99317-9372");
        setCidadeLabel("Volta Redonda");
        setCidadeLocation(value.location);
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
          </Unidades>

          <LoadScript googleMapsApiKey="AIzaSyB3iYXBKTf27MACNe7AJrthMse6Ug544gA">
            <GoogleMap
              className="mapa"
              mapContainerStyle={mapStyles}
              zoom={16}
              center={cidadeLocation}>
              {cidadeOptions.map((item) => {
                return (
                  <Marker
                    key={item.label}
                    position={item.location}
                    onClick={() => onSelect(item)}
                    label="Ubá Móveis"
                  />
                );
              })}
              {selected.location && (
                <InfoWindow
                  position={selected.location}
                  clickable={true}
                  onCloseClick={() => setSelected({})}>
                  <p>{selected.name}</p>
                </InfoWindow>
              )}
            </GoogleMap>
          </LoadScript>
        </Content>
      </DivUnidades>
      <Newsletter />
      <NossasLojas />
      <Footer />
    </>
  );
}
