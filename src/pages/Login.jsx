import React, { useState } from "react";
import "./style/Login.css";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/Password";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { RadioButton } from "primereact/radiobutton";
import { Dropdown } from "primereact/dropdown";

const Login = () => {
  const [dados, setDados] = useState({
    usuario: "",
    senha: "",
  });

  const navigate = useNavigate();

  const [tiposAcesso] = useState([
    {
      code: 0,
      label: "Paciente",
    },
    {
      code: 1,
      label: "Funcionário",
    },
    {
      code: 2,
      label: "Administrador",
    },
  ]);

  const [tipoAcesso, setTipoAcesso] = useState(0);

  return (
    <div className="card-login-container">
      <div className="card-login">
        <div className="card grid mb-2 justify-content-center">
          <div className="col-fixed">
            <h1>Login</h1>
          </div>
        </div>
        <div className="car grid mb-5">
          <div className="col-12">
            <div className="divider-login"></div>
          </div>
        </div>
        <div className="card grid mt-3 mb-3">
          <div className="col-12">
            <div className="flex flex-column gap-2">
              <label htmlFor="usr">Usuário</label>
              <InputText
                className="w-full"
                value={dados.usuario}
                onChange={(e) =>
                  setDados((prev) => ({ ...prev, usuario: e.target.value }))
                }
                inputId="usr"
              />
            </div>
          </div>
        </div>
        <div className="card grid mb-3">
          <div className="col-12">
            <div className="flex flex-column gap-2">
              <label htmlFor="pass">Senha</label>
              <Password
                className="w-full"
                feedback={false}
                toggleMask
                value={dados.senha}
                onChange={(e) =>
                  setDados((prev) => ({ ...prev, senha: e.target.value }))
                }
                inputId="pass"
              />
            </div>
          </div>
        </div>
        <div className="card grid mb-5">
          <div className="col-12">
            <div className="flex justify-content-center flex-wrap gap-3">
              <div className="flex align-items-center">
                <RadioButton
                  inputId="ingredient1"
                  name="pizza"
                  value={0}
                  onChange={(e) => setTipoAcesso(e.value)}
                  checked={tipoAcesso === 0}
                />
                <label htmlFor="ingredient1" className="ml-2">
                  Paciente
                </label>
              </div>
              <div className="flex align-items-center">
                <RadioButton
                  inputId="ingredient2"
                  name="pizza"
                  value={1}
                  onChange={(e) => setTipoAcesso(e.value)}
                  checked={tipoAcesso === 1}
                />
                <label htmlFor="ingredient2" className="ml-2">
                  Funcionário
                </label>
              </div>
              <div className="flex align-items-center">
                <RadioButton
                  inputId="ingredient3"
                  name="pizza"
                  value={2}
                  onChange={(e) => setTipoAcesso(e.value)}
                  checked={tipoAcesso === 2}
                />
                <label htmlFor="ingredient3" className="ml-2">
                  Admin
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="card grid mb-3">
          <div className="col-12">
            <Button
              label="Entrar"
              className="w-full"
              onClick={() => {
                navigate(
                  `/${
                    tipoAcesso === 0
                      ? "paciente"
                      : tipoAcesso === 1
                      ? "funcionario"
                      : "admin"
                  }/home`
                );
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
