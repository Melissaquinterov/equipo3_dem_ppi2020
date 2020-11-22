import React, { useState } from "react";
import Axios from "axios";
import "../style/style.css";

const Perfil = () => {
  const [establecimiento, setEstablecimiento] = useState({});

  function updateEstablecimiento(ev) {
    ev.persist();
    const name = ev.target.name;
    const value = ev.target.value;

    setEstablecimiento({
      ...establecimiento,
      [name]: value
    });
  }

  function guardarEstablecimiento() {
    Axios.post("https://prlik.sse.codesandbox.io/", establecimiento)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div class="fondoblanco">
      <div className=" container-fluid  container5 fondoInicio7">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <br />
              <br />
              <h1 className="openshop2">Open Shop</h1>
              <br />

              <form>
                <label>
                  <strong> Nombre: </strong>
                  <input
                    className="text"
                    type="text"
                    name="nombre"
                    onChange={updateEstablecimiento}
                  />
                </label>

                <label>
                  <strong> Dirección: </strong>
                  <input
                    className="text"
                    type="text"
                    name="direccion"
                    onChange={updateEstablecimiento}
                  />
                </label>

                <br />

                <div class="personas ">
                  <select
                    id="inputState"
                    class="form-control"
                    name="categoria"
                    onChange={updateEstablecimiento}
                  >
                    <option selected disabled>
                      Tipo de categoría
                    </option>
                    <option>Droguería</option>
                    <option>Tecnología</option>
                    <option>Restaurante</option>
                    <option>Belleza</option>
                  </select>
                </div>
                <br />
                <div className="personas">
                  <select
                    id="inputState"
                    class="form-control"
                    name="cantidadPersonas"
                    onChange={updateEstablecimiento}
                  >
                    <option selected disabled>
                      Nº de personas en el establecimiento:
                    </option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>Más de 10</option>
                  </select>
                </div>
                <br />

                <label>
                  <strong> Horario: </strong>
                  <input
                    className="text"
                    type="text"
                    name="horario"
                    placeholder="10:00 - 09:00"
                    onChange={updateEstablecimiento}
                  />
                </label>

                <br />
                <label>
                  <strong> Domicilios </strong>
                </label>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="domicilios"
                    id="exampleRadios1"
                    value="Sí"
                    defaultChecked
                    onChange={updateEstablecimiento}
                  />
                  <label class="form-check-label" for="exampleRadios1">
                    Si
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="domicilios"
                    id="exampleRadios2"
                    value="No"
                    onChange={updateEstablecimiento}
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    No
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="domicilios"
                    id="exampleRadios2"
                    value="Fuera de servicio"
                    onChange={updateEstablecimiento}
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    Fuera de servicio
                  </label>
                </div>

                <br />
                <button className="button" type="button">
                  <a className="text-dark" href="establecimientos1">
                    Atrás
                  </a>
                </button>

                <button
                  className="button"
                  type="button"
                  onClick={guardarEstablecimiento}
                >
                  Actualizar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Perfil;
