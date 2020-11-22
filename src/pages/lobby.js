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
                  <button className="more">
                    <a className="text-dark" href="perfil">
                      +
                    </a>
                  </button>

                  <button className="button1" onClick={this._Alerta}>
                    Borrar establecimiento
                  </button>
                </div>

                <button className="button">
                  <a className="text-dark" href="iniciarSesion">
                    Atrás
                  </a>
                </button>

                <button className="button">
                  <a className="text-dark" href="establecimientos1">
                    Siguiente
                  </a>
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