import React, { memo } from "react";
import { Dialog } from "primereact/dialog";

const DefaultDialog = ({
  open,
  setOpen,
  children,
  className = "",
  style,
  title = "",
}) => {
  return (
    <Dialog
      header={title}
      visible={open}
      onHide={() => {
        if (open) {
          setOpen(false);
        }
      }}
      className={className}
      style={style ?? { width: "50rem" }}
      breakpoints={{ "960px": "75vw", "641px": "100vw" }}
      resizable={false}
      draggable={false}
      dismissableMask={true}
    >
      {children}
    </Dialog>
  );
};

export default memo(DefaultDialog);
