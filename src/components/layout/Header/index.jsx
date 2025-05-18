import React, { memo } from "react";
import { Menubar } from "primereact/menubar";
import MenuUser from "../MenuUser";
import { useNavigate, useParams } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const { tipo } = useParams();

  const paciente = [
    {
      label: "Página Inicial",
      icon: "pi pi-home",
      command: () => {
        navigate("/paciente/home");
      },
    },
    {
      label: "Consulta",
      icon: "pi pi-folder-open",
      items: [
        {
          label: "Agendar",
          icon: "pi pi-pen-to-square",
          command: () => {
            navigate("/paciente/consulta/agendar");
          },
        },
        {
          label: "Listagem",
          icon: "pi pi-list",
          command: () => {
            navigate("/paciente/consulta/listagem");
          },
        },
      ],
    },
    {
      label: "Histórico",
      icon: "pi pi-calendar-clock",
      command: () => {
        navigate("/paciente/historico");
      },
    },
    {
      label: "Notificações",
      icon: "pi pi-bell",
      command: () => {
        navigate("/paciente/notificacoes");
      },
    },
    {
      label: "Teleconsulta",
      icon: "pi pi-desktop",
      command: () => {
        navigate("/paciente/teleconsulta");
      },
    },
  ];

  const admin = [
    {
      label: "Página Inicial",
      icon: "pi pi-home",
      command: () => {
        navigate("/admin/home");
      },
    },
    {
      label: "Cadastro",
      icon: "pi pi-plus",
      items: [
        {
          label: "Pacientes",
          icon: "pi pi-list",
          command: () => {
            navigate("/admin/cadastro/pacientes");
          },
        },
        {
          label: "Funcionários",
          icon: "pi pi-list",
          command: () => {
            navigate("/admin/cadastro/funcionarios");
          },
        },
      ],
    },
    {
      label: "Internações",
      icon: "pi pi-list-check",
      command: () => {
        navigate("/admin/internacoes");
      },
    },
    {
      label: "Relatório",
      icon: "pi pi-file-pdf",
      command: () => {
        navigate("/admin/relatorios");
      },
    },
  ];

  const funcionario = [
    {
      label: "Página Inicial",
      icon: "pi pi-home",
      command: () => {
        navigate("/funcionario/home");
      },
    },
    {
      label: "Agenda",
      icon: "pi pi-calendar-clock",
      command: () => {
        navigate("/funcionario/agenda");
      },
    },
    {
      label: "Pacientes",
      icon: "pi pi-user",
      items: [
        {
          label: "Histórico",
          icon: "pi pi-calendar-clock",
          command: () => {
            navigate("/funcionario/pacientes/historico");
          },
        },
        {
          label: "Prontuário",
          icon: "pi pi-address-book",
          command: () => {
            navigate("/funcionario/pacientes/prontuario");
          },
        },
      ],
    },
    {
      label: "Emitir receita",
      icon: "pi pi-receipt",
      command: () => {
        navigate("/funcionario/emitirreceita");
      },
    },
  ];

  return (
    <header className="default-header card">
      <Menubar
        start={
          <img
            src="/logo-sis.png"
            height="40"
            width="40"
            className="logo-sis"
          />
        }
        model={
          tipo === "admin"
            ? admin
            : tipo === "paciente"
            ? paciente
            : funcionario
        }
        end={<MenuUser />}
      />
    </header>
  );
};

export default memo(Header);
