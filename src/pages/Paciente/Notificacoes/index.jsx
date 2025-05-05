import React, { useState } from "react";
import DefaultPage from "../../../components/layout/DefaultPage";
import DefaultTable from "../../../components/Default/DefaultTable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

const Notificacoes = () => {
  const [listaNotificacoes] = useState([
    {
      titulo: `Aviso sobre roupas`,
      mensagem:
        "Caros pacientes, informamos que será necessário o uso de calça e tênis para adentrar nas dependências do hospital. Obrigada.",
      data: "05/05/2025",
      lida: false,
    },
    {
      titulo: "Controle de pragas",
      mensagem:
        "Caso seja visto algum tipo de praga como insetos ou roedores, favor alertar a recepção do prédio do hospital.",
      data: "02/05/2025",
      lida: false,
    },
    {
      titulo: "Oculista Alberto Silva de férias",
      mensagem:
        "Informamos que o oculista Alberto Silva adiantou suas férias, e por conta disso, os pacientes do Alberto foram transferidos para o Alfredo Dias.",
      data: "29/04/2025",
      lida: true,
    },
  ]);

  return (
    <DefaultPage title="Notificações">
      <DefaultTable value={listaNotificacoes}>
        <Column
          body={
            <b>
              <i className="pi pi-bell"></i>
            </b>
          }
        ></Column>
        <Column field="titulo" header="Título"></Column>
        <Column field="mensagem" header="Mensagem notificação"></Column>
        <Column field="data" header="Data"></Column>
        <Column
          body={(data) =>
            !data.lida ? (
              <Button icon="pi pi-eye" label="Visualizar" outlined />
            ) : (
              <b style={{ color: "var(--green-600)" }}>Lida</b>
            )
          }
          header="Visualizar"
        ></Column>
      </DefaultTable>
    </DefaultPage>
  );
};

export default Notificacoes;
