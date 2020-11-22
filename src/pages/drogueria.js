import Axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Menu from "../components/menu";
import DrogFarma from "../images/drogFarma.jpeg";
import Farmacenter from "../images/farmacenter.jpg";

const Drogueria = () => {
  const [droguerias, setDroguerias] = useState([]);

  useEffect(() => {
    Axios.get("https://prlik.sse.codesandbox.io/drogueria")
      .then((response) => {
        const data = response.data.rows;
        setDroguerias(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="container-fluid fondo ">
        <div className="row">
          <br></br>
          <Header />
          <h1 className="container">OpenShop</h1>
          <Menu />
          <h3 className="tituloComunaCinco container">
            Establecimientos comuna 5: <br></br> Categoría Droguería
          </h3>
          <br></br>
        </div>
        <div className="card stylecarsito">
          <img class="card-img-top" src={Farmacenter} alt="Card image cap" />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>

        <div className="row text-center establecimientoCard">
          <div className="col">
            <div className="w-100">
              <img
                className="imagenEstablecimiento"
                src={Farmacenter}
                alt=""
              ></img>
              <h4 className="t">
                Farmacenter Roos <br />
              </h4>
              <p className="t">
                Dirección: Carrera 70#110-28 <br></br> Nº de personas en el
                establecimiento: 6 <br></br> Horario: 8:00 - 8:00 <br></br>
                Domicilio: Disponible
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Drogueria;
