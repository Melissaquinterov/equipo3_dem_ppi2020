import React from "react";
import Header from "../components/header";
import MaoTse from "../images/maoTse.jpeg";
import Tolucho from "../images/tolucho.jpeg";
import Menu from "../components/menu";

class Restaurante extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid fondo ">
          <div className="row">
            <br></br>
            <Header />
            <h1 className="container">OpenShop</h1>
            <Menu />
            <h3 className="tituloComunaCinco container">
                Establecimientos comuna 5: <br></br> Categoría Restaurante
            </h3>
            <br></br>
          </div>
          <div className="row text-center establecimientoCard">
          <div className="col">
          <div className="w-100">
          <img
            className="imagenEstablecimiento " 
            src={MaoTse}
            alt=""
          ></img>
          <h4 className="t">
            Mao-Tsé <br />
            </h4> 
            <p className="t">
            Dirección: Carrera 65 #11425 <br></br>
             Nº de personas en el establecimiento: 6 <br></br>
             Horario: 11:00 - 10:00<br></br> Domicilio:No disponible</p>
              
          </div>
          </div> 
           </div>
           <div className="row text-center establecimientoCard">
          <div className="col">
          <div className="w-100">
          <img
            className="imagenEstablecimiento"
            src={Tolucho}
            alt=""
          ></img>
          <h4 className="t">
          Tolucho <br />
            </h4>
            <p className="t">
            Dirección: Carrera 68#94-64  <br></br>
             Nº de personas en el establecimiento: 3 <br></br>
             Horario: 12:00 - 11:00<br></br> Domicilio: Disponible </p>
              
          </div>
          </div> 
           </div>
        </div>
      </div>
    );
  }
}
export default Restaurante;
