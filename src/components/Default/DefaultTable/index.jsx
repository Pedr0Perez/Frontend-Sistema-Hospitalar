import React, { memo } from "react";
import { DataTable } from "primereact/datatable";

const DefaultTable = ({ children, value, rows = 10, emptyMessage = "Vazio" }) => {
  return (
    <DataTable
      value={value}
      paginator
      rows={rows}
      tableStyle={{ minWidth: "50rem" }}
      emptyMessage={emptyMessage}
      stripedRows
    >
      {children}
    </DataTable>
  );
};

export default memo(DefaultTable);
