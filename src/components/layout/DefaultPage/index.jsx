import React, { useEffect } from "react";
import Header from "../Header";
import MainContent from "../MainContent";
import Footer from "../Footer";
import { Panel } from "primereact/panel";
import { useNavigate, useParams } from "react-router-dom";

const DefaultPage = ({ children, title }) => {

  const {tipo} = useParams();

  const navigate = useNavigate();

  useEffect(()=>{
    if(tipo !== "admin" && tipo !== "paciente" && tipo !== "funcionario"){
      navigate("/login");
    }
  }, []);

  return (
    <div className="god">
      <Header />
      <MainContent>
        <Panel header={title} className="custom-panel">{children}</Panel>
      </MainContent>
      <Footer />
    </div>
  );
};

export default DefaultPage;
