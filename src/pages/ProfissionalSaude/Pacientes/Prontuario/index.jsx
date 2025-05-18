import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import DefaultPage from "../../../../components/layout/DefaultPage";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { InputNumber } from "primereact/inputnumber";

const Prontuario = () => {
  const [dadosProntuario, setDadosProntuario] = useState({
    numero: "",
    nome: "",
    nascimento: null,
    genero: "M",
    naturalidade: "",
    nacionalidade: "",
    escolaridade: "",
    ocupacao: "",
    observacoes: "",
  });

  const listaGeneros = [
    {
      id: "M",
      label: "Masculino",
    },
    {
      id: "F",
      label: "Feminino",
    },
    {
      id: "E",
      label: "Outro",
    },
  ];

  const handleChange = (e) => {
    setDadosProntuario((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <DefaultPage title="Prontuários">
      <div className="card grid mb-3">
        <div className="col-12 md:col-6 lg:col-4">
          <div className="flex flex-column gap-1">
            <label>N° prontuário</label>
            <InputNumber
              value={dadosProntuario.numero}
              name="numero"
              onChange={(e) => {
                setDadosProntuario((prev) => ({ ...prev, numero: e.value }));
              }}
            />
          </div>
        </div>
      </div>
      <div className="card grid mb-3">
        <div className="col-12 md:col-6 lg:col-4">
          <div className="flex flex-column gap-1">
            <label>Nome completo</label>
            <InputText
              value={dadosProntuario.nome}
              name="nome"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="card grid mb-3">
        <div className="col-12 md:col-6 lg:col-2">
          <div className="flex flex-column gap-1">
            <label>Data de nasc.</label>
            <Calendar
              value={dadosProntuario.nascimento}
              dateFormat="dd/mm/yy"
              onChange={(e) => {
                setDadosProntuario({ ...dadosProntuario, nascimento: e.value });
              }}
            />
          </div>
        </div>
        <div className="col-12 md:col-6 lg:col-2">
          <div className="flex flex-column gap-1">
            <label>Gênero</label>
            <Dropdown
              optionValue="id"
              optionLabel="label"
              options={listaGeneros}
              value={dadosProntuario.genero}
              onChange={handleChange}
              name="genero"
            />
          </div>
        </div>
      </div>
      <div className="card grid mb-3">
        <div className="col-12 md:col-6 lg:col-4">
          <div className="flex flex-column gap-1">
            <label>Naturalidade</label>
            <InputText
              value={dadosProntuario.naturalidade}
              name="naturalidade"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="card grid mb-3">
        <div className="col-12 md:col-6 lg:col-4">
          <div className="flex flex-column gap-1">
            <label>Nacionalidade</label>
            <InputText
              value={dadosProntuario.nacionalidade}
              name="nacionalidade"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="card grid mb-3">
        <div className="col-6 md:col-3 lg:col-2">
          <div className="flex flex-column gap-1">
            <label>Escolaridade</label>
            <InputText
              value={dadosProntuario.escolaridade}
              name="escolaridade"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-6 md:col-3 lg:col-2">
          <div className="flex flex-column gap-1">
            <label>Ocupação</label>
            <InputText
              value={dadosProntuario.ocupacao}
              name="ocupacao"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="card grid mb-3">
        <div className="col-12 md:col-6 lg:col-4">
          <div className="flex flex-column gap-1">
            <label>Observações</label>
            <InputTextarea
              value={dadosProntuario.observacoes}
              name="observacoes"
              onChange={handleChange}
              rows={5}
              autoResize
            />
          </div>
        </div>
      </div>
      <div className="card grid">
        <div className="col-fixed">
          <Button icon="pi pi pi-pencil" label="Atualizar prontuário" />
        </div>
      </div>
    </DefaultPage>
  );
};

export default Prontuario;
