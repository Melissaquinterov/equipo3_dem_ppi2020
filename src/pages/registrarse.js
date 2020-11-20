import Axios from "axios";
import React, { useState } from "react";

const Registrarse = () => {
  const [userData, setUserData] = useState({
    user: "pepe"
  });

  Axios.get("https://prlik.sse.codesandbox.io/").then((responde) => {
    console.log(responde);
  });

  return (
    <div className="fondoblanco">
      <div className="container-fluid containerDos fondoInicio2">
        <div className="row">
          <div className="col-sm">
            <h1> OpenShop</h1>

            <br />

            <h2 className="register"> Registro </h2>
            <form>
              <label>
                <strong> Usuario : </strong>
                <br />
                <input className="text" type="text" id="name" name="name" />
              </label>
            </form>
            <form>
              <label>
                <strong> E-mail : </strong>
                <br />
                <input className="text" type="text" name="name" />
              </label>
            </form>
            <form>
              <label>
                <strong> Contraseña : </strong>
                <br />
                <input className="text" type1="text" name="name" />
              </label>
            </form>
            <form>
              <label>
                <strong> Confirmar contraseña : </strong>
                <br />
                <input className="text" type="text" name="name" />
              </label>
            </form>

            <button className="button" type="button">
              <a href="inicio">Atrás</a>
            </button>

            <button className="button" type="button">
              <a href="establecimientos1">Entrar</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registrarse;
