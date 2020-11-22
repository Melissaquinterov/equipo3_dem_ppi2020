import Axios from "axios";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Logo from "../components/Logo";
import "../style/style.css";

const Lobby = () => {
  const [misEstablecimientos, setMisEstablecimientos] = useState([]);

  useEffect(() => {
    const userid = localStorage.getItem("usuario");
    if (userid) {
      Axios.get(
        "https://prlik.sse.codesandbox.io/mis-establecimientos/" + userid
      )
        .then((response) => {
          const data = response.data.rows;
          if (data && data.length) {
            setMisEstablecimientos(data);
          }
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  function _Alerta() {
    Swal.fire(
      "Éxito",
      "El establecimiento ha sido borrado",
      "Haz click en el botón"
    );
  }

  return (
    <div className="container-fluid fondoInicio5">
      <div className="container  bg-cian">
        <div className="row">
          <div className="col-sm">
            <Logo />
            <h4 className="text-center">Establecimientos creados</h4>

            <div className="bg-whites container mx-auto">
              <a className="btn btn-primary mb-3" href="/perfil">
                Nuevo +
              </a>

              <div className="row">
                {misEstablecimientos.map((establecimiento) => {
                  return (
                    <div class="card col-12 col-md-4 mr-2 mb-3 text-center">
                      <img
                        class="card-img-top"
                        src={establecimiento.imagenes}
                        alt={establecimiento.Nomnbreestablecimiento}
                      />
                      <div class="card-body">
                        <h5 class="card-text">
                          {establecimiento.Nomnbreestablecimiento}
                        </h5>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <a className="btn btn-primary mb-3 mr-5" href="/iniciarSesion">
              Atras
            </a>

            <a className="btn btn-primary mb-3" href="/establecimientos1">
              Siguiente
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Lobby;
