import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import TrabalheConoscoActions from "../../store/ducks/trabalhe-conosco";

import { Form, Input } from "@rocketseat/unform";
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
  const { loading, success } = useSelector((state) => state.trabalheConosco);
  const [sexoSeleted, setSexoSelected] = useState({
    value: "",
    label: "",
  });
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

  const [attach, setAttach] = useState(undefined);

  const dispatch = useDispatch();

  async function handleSubmit(data) {
    try {
      const formData = new FormData();

      formData.append("nome", nome);
      formData.append("email", email);
      formData.append("telefone", telefone);
      formData.append("endereco", endereco);
      formData.append("sexo", sexoSeleted.value === "Masculino" ? "M" : "F");
      formData.append("data_nascimento", dataNascimento);
      formData.append("curriculo", attach);

      dispatch(TrabalheConoscoActions.trabalheConoscoRequest(formData));
    } catch (err) {
      return err.message;
    }
  }

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

  useEffect(() => {
    if (!!success) {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }, [success]);

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
        <Form onSubmit={handleSubmit}>
          <Line>
            <label htmlFor="nome">Nome Completo:</label>
            <Input
              name="nome"
              id="nome"
              onChange={(text) => setNome(text.target.value)}
            />
          </Line>
          <Line>
            <Column>
              <label htmlFor="email">E-mail:</label>
              <Input
                name="email"
                id="email"
                onChange={(text) => setEmail(text.target.value)}
              />
            </Column>
            <Column>
              <label htmlFor="celular">Telefone:</label>
              <InputMask
                type="telefone"
                name="telefone"
                onChange={(text) => setTelefone(text.target.value)}
                id="celular"
              />
            </Column>
          </Line>
          <Line>
            <label htmlFor="endereco">Endereço:</label>
            <Input
              name="endereco"
              id="endereco"
              onChange={(text) => setEndereco(text.target.value)}
            />
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
                onChange={(text) => setDataNascimento(text.target.value)}
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
            {loading && (
              <Spinner>
                <FaSpinner />
              </Spinner>
            )}
            {!loading && "Enviar curriculo"}
          </SendButton>
        </Form>
      </DivForm>
      <Newsletter />
      <NossasLojas />
      <Footer />
    </>
  );
}
