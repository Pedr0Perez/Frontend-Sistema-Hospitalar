import React, { useState } from "react";
import DefaultPage from "../../../components/layout/DefaultPage";
import DefaultTable from "../../../components/Default/DefaultTable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import DialogNovoPaciente from "./DialogNovoPaciente";

const CadastroPacientes = () => {
  const [openDialogPaciente, setOpenDialogPaciente] = useState(false);

  const [pacientesCadastrados] = useState([
    {
      name: "Lucas Edward Perez",
      nasc: "11/08/2003",
      gender: "Masculino",
      blood: "A+",
      dataCadastro: "27/04/2025",
    },
  ]);

  return (
    <>
      <DialogNovoPaciente
        open={openDialogPaciente}
        setOpen={setOpenDialogPaciente}
      />
      <DefaultPage title="Cadastro de Pacientes">
        <div className="card grid mb-3">
          <div className="col-12 md:col-4 lg:col-3">
            <Button
              icon="pi pi-plus"
              label="Novo paciente"
              onClick={() => {
                setOpenDialogPaciente(true);
              }}
            />
          </div>
        </div>
        <div className="card grid">
          <div className="col-12">
            <p className="mb-1">
              Listagem de pacientes cadastrados no sistema hospitalar
            </p>
          </div>
        </div>
        <div className="card grid">
          <div className="col-12">
            <DefaultTable value={pacientesCadastrados}>
              <Column field="name" header="Nome"></Column>
              <Column field="nasc" header="Data de Nasc."></Column>
              <Column field="gender" header="Gênero"></Column>
              <Column field="blood" header="Tipo Sanguíneo"></Column>
              <Column field="dataCadastro" header="Data de Cadastro"></Column>
            </DefaultTable>
          </div>
        </div>
      </DefaultPage>
    </>
  );
};

export default CadastroPacientes;
