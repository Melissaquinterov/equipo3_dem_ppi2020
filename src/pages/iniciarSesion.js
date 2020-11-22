import Axios from "axios";
import React, { useState } from "react";
import "../style/style.css";
import Swal from "sweetalert2";

const IniciarSesion = () => {
  const [userData, setUserData] = useState({});

  function updateUser(ev) {
    ev.persist();

    const name = ev.target.name;
    const value = ev.target.value;

    setUserData({
      ...userData,
      [name]: value
    });
  }

  function singIn() {
    Axios.put("https://prlik.sse.codesandbox.io/inicioSesion", userData)
      .then((respose) => {
        const data = respose.data.row;
        if (data.length) {
          localStorage.setItem("usuario", data[0].ID_Administrador);
          window.location.href = "/lobby";
        } else {
          Swal.fire("Oops", "Usuario o contraseña incorrecta");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div class="fondoblanco">
      <div className="container-fluid containerDos fondoInicio4">
        <div className="row">
          <div className="col-sm">
            <form>
              <h1 className="openshop"> OpenShop</h1>

              <br />

              <label>
                <strong className="text2"> Usuario </strong>
                <br />
                <input
                  className="text"
                  type="text"
                  name="usuario"
                  onChange={updateUser}
                />
              </label>

              <label className="text2">
                <strong> Contraseña </strong>
                <br />
                <input
                  className="text"
                  name="password"
                  onChange={updateUser}
                  type="password"
                />
              </label>

              <button className="button" type="button">
                <a className="text-dark" href="inicio">
                  Atrás
                </a>
              </button>

              <button className="button" type="button" onClick={singIn}>
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IniciarSesion;
