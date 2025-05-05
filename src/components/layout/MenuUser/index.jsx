import React, { memo, useRef } from "react";
import { Menu } from "primereact/menu";
import UserPic from "../../../assets/user.png";
import { useNavigate } from "react-router-dom";

const MenuUser = () => {

  const navigate = useNavigate();

  const items = [
    { label: "Minha conta", icon: "pi pi-user" },
    { label: "Sair", icon: "pi pi-sign-out", command: () => {
      navigate("/login")
    } },
  ];

  const menu = useRef(null);

  return (
    <div className="card flex justify-content-center">
      <Menu
        model={items}
        popup
        ref={menu}
        popupAlignment="right"
        id="popup_menu_right"
      />
      <img
        height="40"
        width="40"
        style={{ borderRadius: "50%", cursor: "pointer" }}
        src={UserPic}
        alt="Usuário"
        title="Minha conta"
        onClick={(e) => {
          menu.current.toggle(e);
        }}
        aria-controls="popup_menu_right"
        aria-haspopup
      />
    </div>
  );
};

export default memo(MenuUser);
