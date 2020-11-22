import React, { useState } from "react";
import Axios from "axios";

const Registrarse = () => {
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

  function registro() {
    const { pass, pass2 } = userData;

    if (pass.length < 5) {
      alert("La contraseña es muy corta");
    } else {
      if (pass === pass2) {
        Axios.post(
          "https://prlik.sse.codesandbox.io/registrarse",
          userData
        ).then((response) => {
          console.log(response);
          const { insertId } = response.data.response;
          localStorage.setItem("usuario", insertId);
          window.location.href = "/lobby";
        });
      } else {
        alert("Las contraseñas no coinciden");
      }
    }
  }

  return (
    <div className="fondoblanco">
      <div className="container-fluid containerDos fondoInicio2">
        <div className="row">
          <div className="col-sm">
            <form>
              <h1> OpenShop</h1>

              <br />

              <h2 className="register"> Registro </h2>
              <label>
                <strong> Usuario : </strong>
                <br />
                <input
                  className="text"
                  type="text"
                  id="name"
                  name="usuario"
                  onChange={updateUser}
                />
              </label>

              <label>
                <strong> E-mail : </strong>
                <br />
                <input
                  className="text"
                  type="email"
                  name="email"
                  onChange={updateUser}
                />
              </label>

              <label>
                <strong> Contraseña : </strong>
                <br />
                <input
                  className="text"
                  type="password"
                  name="pass"
                  onChange={updateUser}
                />
              </label>

              <label>
                <strong> Confirmar contraseña : </strong>
                <br />
                <input
                  className="text"
                  type="password"
                  name="pass2"
                  onChange={updateUser}
                />
              </label>
              <br />

              <button className="button" type="button">
                <a className="text-dark" href="inicio">Atrás</a>
              </button>

              <button className="button" type="button" onClick={registro}>
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registrarse;
