import React, { useState } from "react";
import DefaultPage from "../../../components/layout/DefaultPage";
import DefaultTable from "../../../components/Default/DefaultTable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

const ListagemConsultas = () => {
  const [consultasAgendadas] = useState([
    {
      data: "21/05/2025",
    },
  ]);

  return (
    <DefaultPage title="Consultas Agendadas">
      <div className="card grid">
        <div className="col-12">
          <p className="mt-0 mb-1">
            Suas consultas agendadas que ainda não foram realizadas
          </p>
        </div>
      </div>
      <DefaultTable value={consultasAgendadas}>
        <Column field="data" header="Data consulta"></Column>
        <Column
          body={(data) => (
            <Button
              icon="pi pi-ban"
              label="Cancelar consulta"
              outlined
              severity="danger"
            />
          )}
          header="Ações"
        ></Column>
      </DefaultTable>
    </DefaultPage>
  );
};

export default ListagemConsultas;
