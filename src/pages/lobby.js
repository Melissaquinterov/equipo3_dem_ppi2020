import React from "react";
import Swal from "sweetalert2";
import "../style/style.css";

class Lobby extends React.Component {
  _Alerta() {
    Swal.fire(
      "Éxito",
      "El establecimiento ha sido borrado",
      "Haz click en el botón"
    );
  }

  render() {
    return (
      <div class="fondoblanco">
        <div className=" container-fluid fondoInicio5">
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <br />
                <br />
                <h1 className="openshop1">Open Shop</h1>
                <br />
                <h4> Establecimientos creados</h4>

                <div className="divperfil">
                  <button type="button" className="more">
                    <a href="perfil">+</a>
                  </button>

                  <button className="button1" onClick={this._Alerta}>
                    Borrar establecimiento
                  </button>
                </div>

                <button type="button" className="button">
                  <a href="iniciarSesion">Atrás</a>
                </button>

                <button type="button" className="button">
                  <a href="establecimientos1">Siguiente</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Lobby;
