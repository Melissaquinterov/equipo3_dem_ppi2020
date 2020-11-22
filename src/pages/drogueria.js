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

        <div className="row text-center establecimientoCard">
          <div className="col">
            <div class="card mb-3">
              <img
                class="card-img-top"
                src={Farmacenter}
                alt="Card image cap"
              ></img>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
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
