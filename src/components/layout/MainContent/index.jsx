import React, { memo } from "react";

const MainContent = ({ children }) => {
  return <main className="main-content">{children}</main>;
};

export default memo(MainContent);
