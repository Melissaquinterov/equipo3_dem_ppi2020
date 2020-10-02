import React from "react";
import "../style/style.css";

class IniciarSesion extends React.Component {
  render() {
    return (
      <div className="container-fluid, containerUno ,fondoInicio1">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h1> OpenShop</h1>

            <br />

            <form>
              <label>
                Usuario:
                <input type="text" name="name" />
              </label>
            </form>

            <form>
              <label>
                Contraseña:
                <input type="text" name="name" />
              </label>
            </form>
            <br />
            <button class="Boton2" type="button">
              <a href="inicia">Atrás</a>
            </button>

            <button class="Boton2" type="button">
              <a href="inicia">Entrar</a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default IniciarSesion;
