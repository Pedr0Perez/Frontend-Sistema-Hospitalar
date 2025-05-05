import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const  RedirecionarLogin = () => {
  return <Navigate to="/login" />;
};

export default RedirecionarLogin;
