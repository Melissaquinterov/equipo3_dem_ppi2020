import React from "react";
import "../style/style.css";

class Inicio extends React.Component {
  render() {
    return (
      <div className=" container-fluid fondoInicio">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <br />
              <br />
              <h1>Open Shop</h1>
              <br />
              <button className="botoninit" type="button">
                <a href="inicio">INICIO</a>
              </button>
              <h1>.................</h1>
              <p>¿ Eres dueño de algun establecimiento?</p>
              <button className="botoninit2" type="button">
                <a href="inicia">INICIO SESION</a>
              </button>{" "}
              <br />
              <br />
              <p></p>
              <button className="botonregister" type="button">
                <a href="inicia">REGISTRO</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Inicio;
