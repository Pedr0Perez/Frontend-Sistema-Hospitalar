import React, { memo, useState } from "react";
import DefaultDialog from "../../../../components/Default/DefaultDialog";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { toast } from "react-toastify";

const DialogNovoPaciente = ({ open, setOpen }) => {
  const listaTipoSanguineo = [
    { code: "ap", label: "A+" },
    { code: "am", label: "A-" },
    { code: "bp", label: "B+" },
    { code: "bm", label: "B-" },
    { code: "op", label: "O+" },
    { code: "om", label: "O-" },
  ];

  const listaGenero = [
    { code: "M", label: "Masculino" },
    { code: "F", label: "Feminino" },
    { code: "N", label: "Não binário" },
    { code: "O", label: "Outro" },
  ];

  const [dadosPaciente, setDadosPaciente] = useState({
    primeiroNome: "",
    sobrenome: "",
    nasc: null,
    genero: "",
    sangue: "",
    cpf: "",
  });

  const cadastrarPaciente = () => {
    if (
      !dadosPaciente.primeiroNome.trim() ||
      !dadosPaciente.sobrenome.trim() ||
      !dadosPaciente.nasc ||
      !dadosPaciente.genero ||
      !dadosPaciente.sangue ||
      !dadosPaciente.cpf.trim()
    ) {
      toast.warn("Preencha todos os campos com marcados com *.");
      return;
    }

    toast.success("Paciente cadastrado com sucesso.");
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDadosPaciente((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <DefaultDialog title="Cadastrar paciente" open={open} setOpen={setOpen}>
      <div className="card grid mb-3">
        <div className="col-12 md:col-4">
          <div className="flex flex-column gap-2">
            <label>Primeiro nome*</label>
            <InputText
              value={dadosPaciente.primeiroNome}
              onChange={handleChange}
              name="primeiroNome"
            />
          </div>
        </div>
        <div className="col-12 md:col-8">
          <div className="flex flex-column gap-2">
            <label>Sobrenome*</label>
            <InputText
              value={dadosPaciente.sobrenome}
              onChange={handleChange}
              name="sobrenome"
            />
          </div>
        </div>
      </div>
      <div className="card grid mb-3">
        <div className="col-12 md:col-4">
          <div className="flex flex-column gap-2">
            <label>Data de nasc.*</label>
            <Calendar
              locale="pt-BR"
              dateFormat="dd/mm/yy"
              onChange={handleChange}
              value={dadosPaciente.nasc}
              name="nasc"
            />
          </div>
        </div>
        <div className="col-12 md:col-4">
          <div className="flex flex-column gap-2">
            <label>Gênero*</label>
            <Dropdown
              options={listaGenero}
              value={dadosPaciente.genero}
              name="genero"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-12 md:col-4">
          <div className="flex flex-column gap-2">
            <label>Tipo sanguíneo*</label>
            <Dropdown
              options={listaTipoSanguineo}
              value={dadosPaciente.sangue}
              name="sangue"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="card grid mb-3">
        <div className="col-12">
          <div className="flex flex-column gap-2">
            <label>CPF*</label>
            <InputMask
              value={dadosPaciente.cpf}
              name="cpf"
              onChange={handleChange}
              mask="999.999.999-99"
            />
          </div>
        </div>
      </div>
      <div className="card">
        <div className="col-12 md:col-4">
          <Button
            icon="pi pi-plus"
            label="Cadastrar"
            onClick={() => {
              cadastrarPaciente();
            }}
          />
        </div>
      </div>
    </DefaultDialog>
  );
};

export default memo(DialogNovoPaciente);
