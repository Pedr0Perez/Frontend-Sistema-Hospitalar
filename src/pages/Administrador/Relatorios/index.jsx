import React, { useState } from "react";
import DefaultPage from "../../../components/layout/DefaultPage";
import DefaultTable from "../../../components/Default/DefaultTable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

const Relatorios = () => {
  const [listaTipoRelatorios] = useState([
    {
      tipo: "Altas do último mês",
    },
    {
      tipo: "Óbitos do último mês",
    },
    {
      tipo: "Internações do último mês",
    },
    {
      tipo: "Altas das últimas 24h",
    },
  ]);

  return (
    <DefaultPage title="Relatórios">
      <DefaultTable value={listaTipoRelatorios}>
        <Column field="tipo" header="Tipo relatório"></Column>
        <Column
          body={(data) => (
            <Button label="Relatório" icon="pi pi-file-pdf" outlined />
          )}
          header="Ações"
        ></Column>
      </DefaultTable>
    </DefaultPage>
  );
};

export default Relatorios;
