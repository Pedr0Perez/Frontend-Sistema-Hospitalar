import React from "react";
import DefaultPage from "../../../components/layout/DefaultPage";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";

const EmitirReceita = () => {
  return (
    <DefaultPage title="Emitir receita">
      <div className="card grid mb-3">
        <div className="col-12 md:col-6 lg:col-4">
          <div className="flex flex-column gap-2">
            <label>E-mail paciente</label>
            <InputText type="email" />
          </div>
        </div>
      </div>
      <div className="card grid mb-3">
        <div className="col-12 md:col-6 lg:col-4">
          <div className="flex flex-column gap-2">
            <label>Receituário</label>
            <InputTextarea rows={7} autoResize />
          </div>
        </div>
      </div>
      <div className="card grid">
        <div className="col-fixed">
          <Button icon="pi pi-send" label="Emitir receita" />
        </div>
      </div>
    </DefaultPage>
  );
};

export default EmitirReceita;
