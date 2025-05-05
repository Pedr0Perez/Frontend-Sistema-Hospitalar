import React, { useState } from "react";
import DefaultPage from "../../../components/layout/DefaultPage";
import DefaultTable from "../../../components/Default/DefaultTable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

const Internacoes = () => {
  const [listaInternacoes] = useState([
    {
      nome: "Lucas Almeida Silva",
      situacao: 0,
    },
    {
      nome: "Pedro Almeida Munhòz",
      situacao: 1,
    },
    {
      nome: "Carlos Alberto Mendes",
      situacao: 0,
    },
    {
      nome: "Adalberto Pimenta Silva",
      situacao: 0,
    },
    {
      nome: "Mariano Almeida Silva",
      situacao: 1,
    },
  ]);

  return (
    <DefaultPage title="Fluxo de Internações">
      <div className="card grid mb-3">
        <div className="col-12">
          <DefaultTable value={listaInternacoes}>
            <Column field="nome" header="Nome paciente"></Column>
            <Column
              body={(data) => (
                <b
                  style={{
                    color:
                      data.situacao === 0
                        ? "var(--yellow-500)"
                        : "var(--green-500)",
                  }}
                >
                  {data.situacao === 0 ? "Internação" : "Em alta"}
                </b>
              )}
              header="Situação atual"
            ></Column>
            <Column
              body={(data) =>
                data.situacao === 0 ? (
                  <Button label="Dar alta" severity="success" outlined />
                ) : null
              }
              header="Ações"
            ></Column>
          </DefaultTable>
        </div>
      </div>
    </DefaultPage>
  );
};

export default Internacoes;
