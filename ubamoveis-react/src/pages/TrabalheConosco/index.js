import React, { useState, useEffect, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Textarea } from "@rocketseat/unform";
import * as Yup from "yup";
import { FaSpinner } from "react-icons/fa";
import Select from "react-select";

import Menu from "../../components/Menu";
import BannerInterna from "../../components/BannerInterna";
import Newsletter from "../../components/Newsletter";
import NossasLojas from "../../components/NossasLojas";
import Footer from "../../components/Footer";
import InputMask from "../../components/InputMask";

import {
  DivTitulo,
  TituloStrong,
  Separator,
  DivForm,
  SubTitulo,
  Column,
  Line,
  Spinner,
  ContainerInputFile,
  Arquivo,
  SendButton,
} from "./styles";

import TrabalheConoscoImg from "../../assets/images/trabalhe_conosco_interna.png";

export default function TrabalheConosco() {
  const inputRef = useRef(null);
  const [sexoSeleted, setSexoSelected] = useState({
    value: "",
    label: "",
  });
  const [attach, setAttach] = useState(undefined);

  const schema = Yup.object().shape({
    nome: Yup.string().required("Obrigatório"),
    email: Yup.string().email("E-mail inválido").required("Obrigatório"),
    telefone: Yup.string().required("Obrigatório"),
  });

  const dispatch = useDispatch();

  function handleSubmit(data) {}

  const sexo = [
    { value: "Masculino", label: "Masculino" },
    { value: "Feminino", label: "Feminino" },
  ];

  function handleChange(event) {
    setAttach(event.target.files[0]);
  }

  function handleFile() {
    return inputRef.current.click();
  }
  return (
    <>
      <Menu />
      <BannerInterna
        image={TrabalheConoscoImg}
        title="trabalhe conosco"
        text="Faça parte da equipe da Ubá Móveis."
      />
      <DivTitulo>
        <TituloStrong>Envie seu currículo</TituloStrong>
        <Separator />
        <SubTitulo>
          Preencha os campos abaixo para fazer parte dos nossos processos
          seletivos.
        </SubTitulo>
      </DivTitulo>
      <DivForm>
        <Form onSubmit={handleSubmit} schema={schema}>
          <Line>
            <label htmlFor="nome">Nome Completo:</label>
            <Input name="nome" id="nome" />
          </Line>
          <Line>
            <Column>
              <label htmlFor="email">E-mail:</label>
              <Input name="email" id="email" />
            </Column>
            <Column>
              <label htmlFor="celular">Telefone:</label>
              <InputMask type="telefone" name="telefone" id="celular" />
            </Column>
          </Line>
          <Line>
            <label htmlFor="endereco">Endereço:</label>
            <Input name="endereco" id="endereco" />
          </Line>
          <Line>
            <Column>
              <label htmlFor="sexo">Sexo:</label>
              <Select
                name="sexo"
                className="selectSexo"
                classNamePrefix="selectSexo"
                options={sexo}
                onChange={(value) => {
                  setSexoSelected(value);
                }}
                value={sexoSeleted}
              />
            </Column>
            <Column>
              <label htmlFor="dataNascimento">Data de Nascimento:</label>
              <InputMask
                type="date"
                name="dataNascimento"
                id="dataNascimento"
              />
            </Column>
          </Line>
          <Line>
            <ContainerInputFile>
              <label htmlFor={"aquivo"}>
                {"Currículo (doc, docx ou pdf):"}
              </label>
              <Arquivo>
                <span>
                  {attach ? attach.name : "Nenhum arquivo selecionado"}
                </span>
                <input
                  className="arquivo"
                  type="file"
                  id={"aquivo"}
                  name={"aquivo"}
                  ref={inputRef}
                  defaultValue={""}
                  onChange={handleChange}
                  accept=".doc,.docx,.pdf"
                />
                <button type="button" onClick={handleFile}>
                  Selecionar
                </button>
              </Arquivo>
            </ContainerInputFile>
          </Line>
          <SendButton>
            {/* {loading && (
              <Spinner>
                <FaSpinner />
              </Spinner>
            )}
            {!loading && "Criar Conta"} */}
            Enviar curriculo
          </SendButton>
        </Form>
      </DivForm>
      <Newsletter />
      <NossasLojas />
      <Footer />
    </>
  );
}
