import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import Menu from "../../components/Menu";
import BannerInterna from "../../components/BannerInterna";
import Newsletter from "../../components/Newsletter";
import NossasLojas from "../../components/NossasLojas";
import Footer from "../../components/Footer";

import {
  DivTitulo,
  Titulo,
  TituloStrong,
  Separator,
  DivProdutos,
} from "./styles";

import LojasImg from "../../assets/images/lojas_interna.png";

export default function Lojas() {
  const [selected, setSelected] = useState({});

  const onSelect = (item) => {
    setSelected(item);
  };
  const mapStyles = {
    height: "500px",
    width: "800px",
  };

  const defaultCenter = {
    lat: -22.5383368,
    lng: -44.1195285,
  };

  const locations = [
    {
      name: "Location 1",
      location: {
        lat: -22.5383368,
        lng: -44.1195285,
      },
    },
    {
      name: "Location 2",
      location: {
        lat: 41.3917,
        lng: 2.1649,
      },
    },
    {
      name: "Location 3",
      location: {
        lat: 41.3773,
        lng: 2.1585,
      },
    },
    {
      name: "Location 4",
      location: {
        lat: 41.3797,
        lng: 2.1682,
      },
    },
    {
      name: "Location 5",
      location: {
        lat: 41.4055,
        lng: 2.1915,
      },
    },
  ];

  return (
    <>
      <Menu />
      <BannerInterna
        image={LojasImg}
        title="Nossas Lojas"
        text="Conheça as lojas Ubá."
      />
      <LoadScript googleMapsApiKey="AIzaSyCsw3_s3pdAJgaUWn8hFtwV7yg5wmKFkyY">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>
          {locations.map((item) => {
            return (
              <Marker
                key={item.name}
                position={item.location}
                onClick={() => onSelect(item)}
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
      <Newsletter />
      <NossasLojas />
      <Footer />
    </>
  );
}
