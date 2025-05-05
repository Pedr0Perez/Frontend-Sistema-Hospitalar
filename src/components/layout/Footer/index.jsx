import React, { memo } from "react";

const Footer = () => {
  return (
    <footer className="default-footer">
      <div className="container">
        <small>
          <p className="m-0">Gestão Hospitalar</p>
          <p className="m-0">v1.0.0</p>
        </small>
      </div>
    </footer>
  );
};

export default memo(Footer);
