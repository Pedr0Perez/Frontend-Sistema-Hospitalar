import React from "react";
import DefaultPage from "../../../components/layout/DefaultPage";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";

const Teleconsulta = () => {
  return (
    <DefaultPage title="Teleconsulta">
      <div className="card grid mb-3">
        <div className="col-12 md:col-6">
          <InputTextarea
            placeholder="Cole o token da teleconsulta aqui"
            autoResize
            className="w-full"
            rows={5}
          />
        </div>
      </div>
      <div className="card grid">
        <div className="col-fixed">
          <Button icon="pi pi-desktop" label="Ingressar" />
        </div>
      </div>
    </DefaultPage>
  );
};

export default Teleconsulta;
