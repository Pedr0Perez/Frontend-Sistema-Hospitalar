import React, { useState } from "react";
import DefaultPage from "../../../../components/layout/DefaultPage";
import DefaultTable from "../../../../components/Default/DefaultTable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";

const HistoricoPacientes = () => {
  const [listaConsultas] = useState({
    1: [
      {
        data: "05/12/2024",
        medico: "Luiz Gonzaga",
      },
      {
        data: "07/12/2024",
        medico: "Luiz Vicentin",
      },
    ],
    2: [
      {
        data: "11/11/2022",
        medico: "Maria Sylvania",
      },
    ],
    3: [],
    4: [
      {
        data: "11/01/2025",
        medico: "Jener Sápia",
      },
    ],
    5: [],
  });

  const listaPacientes = [
    {
      code: 1,
      nome: "Pedro Almeida Silva",
    },
    {
      code: 2,
      nome: "Rogério Antônio Mendes",
    },
    {
      code: 3,
      nome: "Jocione Silva Mendonça",
    },
    {
      code: 4,
      nome: "Alam Patracon",
    },
  ];

  const [pacienteSelecionado, setPacienteSelecionado] = useState(null);

  const handleChange = (e) => {
    setPacienteSelecionado(e.target.value);
  };

  return (
    <DefaultPage title="Histórico">
      <div className="card grid mb-3">
        <div className="col-12 md:col-8 lg:col-6">
          <div className="flex flex-column gap-2">
            <label>Paciente</label>
            <Dropdown
              options={listaPacientes}
              optionValue="code"
              optionLabel="nome"
              value={pacienteSelecionado}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      {pacienteSelecionado !== null && (
        <div className="card grid">
          <div className="col-12">
            <p>
              Histórico de consultas do paciente "
              {
                listaPacientes.find((item) => item.code === pacienteSelecionado)
                  ?.nome
              }
              "
            </p>
          </div>
        </div>
      )}
      <div className="card grid">
        <div className="col-12">
          <DefaultTable
            value={
              pacienteSelecionado === null
                ? []
                : listaConsultas[pacienteSelecionado]
            }
          >
            <Column field="data" header="Data consulta"></Column>
            <Column field="medico" header="Médico"></Column>
          </DefaultTable>
        </div>
      </div>
    </DefaultPage>
  );
};

export default HistoricoPacientes;
