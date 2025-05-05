import React, { useState } from "react";
import DefaultPage from "../../../components/layout/DefaultPage";
import DefaultTable from "../../../components/Default/DefaultTable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import DialogNovoFuncionario from "./DialogNovoFuncionario";

const CadastroFuncionarios = () => {
  const [openDialogPaciente, setOpenDialogPaciente] = useState(false);

  const [pacientesCadastrados] = useState([
    {
      name: "Eduardo Pivesso Francisco",
      tipo: "Médico",
      nasc: "20/11/2003",
      gender: "Masculino",
      dataCadastro: "29/04/2025",
    },
    {
      name: "Marcus Antonio Silva",
      tipo: "Enfermeiro",
      nasc: "01/05/1985",
      gender: "Masculino",
      dataCadastro: "29/04/2025",
    },
    {
      name: "Jennifer Wonka Colla",
      tipo: "Enfermeiro",
      nasc: "01/02/1992",
      gender: "Feminino",
      dataCadastro: "29/04/2025",
    },
  ]);

  return (
    <>
      <DialogNovoFuncionario
        open={openDialogPaciente}
        setOpen={setOpenDialogPaciente}
      />
      <DefaultPage title="Cadastro de Funcionários">
        <div className="card grid mb-3">
          <div className="col-12 md:col-4 lg:col-3">
            <Button
              icon="pi pi-plus"
              label="Novo funcionário"
              onClick={() => {
                setOpenDialogPaciente(true);
              }}
            />
          </div>
        </div>
        <div className="card grid">
          <div className="col-12">
            <p className="mb-1">
              Listagem de funcionários cadastrados no sistema hospitalar
            </p>
          </div>
        </div>
        <div className="card grid">
          <div className="col-12">
            <DefaultTable value={pacientesCadastrados}>
              <Column field="name" header="Nome"></Column>
              <Column field="tipo" header="Tipo"></Column>
              <Column field="nasc" header="Data de Nasc."></Column>
              <Column field="gender" header="Gênero"></Column>
              <Column field="dataCadastro" header="Data de Cadastro"></Column>
              <Column
                body={(data) => (
                  <Button icon="pi pi-ban" severity="danger" label="Inativar" />
                )}
              ></Column>
            </DefaultTable>
          </div>
        </div>
      </DefaultPage>
    </>
  );
};

export default CadastroFuncionarios;
