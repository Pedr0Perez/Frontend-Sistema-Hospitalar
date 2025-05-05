import React, { useState } from "react";
import DefaultPage from "../../../components/layout/DefaultPage";
import { Calendar } from "primereact/calendar";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";

const AgendarConsulta = () => {
  const [dadosConsulta, setDadosConsulta] = useState({
    data: null,
    motivo: "",
  });

  return (
    <DefaultPage title="Agendar consulta">
      <div className="card grid mb-3">
        <div className="col-3">
          <div className="flex flex-column gap-2">
            <label>Data</label>
            <Calendar
              value={dadosConsulta.data}
              onChange={(e) => {
                setDadosConsulta((prev) => ({ ...prev, data: e.target.value }));
              }}
              locale="pt-BR"
              dateFormat="dd/mm/yy"
            />
          </div>
        </div>
      </div>
      <div className="card grid mb-3">
        <div className="col-3">
          <div className="flex flex-column gap-2">
            <label>Motivo</label>
            <InputTextarea
              value={dadosConsulta.motivo}
              onChange={(e) => {
                setDadosConsulta((prev) => ({
                  ...prev,
                  motivo: e.target.value,
                }));
              }}
              rows={5}
              autoResize
            />
          </div>
        </div>
      </div>
      <div className="card grid">
        <div className="col-fixed">
          <Button icon="pi pi-pen-to-square" label="Agendar consulta" />
        </div>
      </div>
    </DefaultPage>
  );
};

export default AgendarConsulta;
