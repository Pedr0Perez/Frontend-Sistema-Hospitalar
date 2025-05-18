import React, { useState } from "react";
import DefaultPage from "../../../components/layout/DefaultPage";
import DefaultTable from "../../../components/Default/DefaultTable";
import { Column } from "primereact/column";

const Historico = () => {
  const [listaConsultas] = useState([
    {
      data: "05/12/2024",
      medico: "Luiz Gonzaga",
    },
    {
      data: "07/12/2024",
      medico: "Luiz Vicentin",
    },
  ]);

  return (
    <DefaultPage title="Histórico">
      <div className="card grid">
        <div className="col-12">
          <p>Seu histórico clínico de consultas realizadas</p>
        </div>
      </div>
      <div className="card grid">
        <div className="col-12">
          <DefaultTable value={listaConsultas}>
            <Column field="data" header="Data consulta"></Column>
            <Column field="medico" header="Médico"></Column>
          </DefaultTable>
        </div>
      </div>
    </DefaultPage>
  );
};

export default Historico;
