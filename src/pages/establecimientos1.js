import React from "react";
import Header from "../components/header";
import MenuAdministrador from "../components/menuAdministrador";
import BarberiaEsparta from "../images/barberiaEsparta.jpg";
import Celulares from "../images/celulares.jpg";
import maoTse from "../images/maoTse.jpeg";

class Establecimientos1 extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid fondo ">
          <div className="row">
            <br></br>
            <Header />
            <h1 className="container">OpenShop</h1>
            <MenuAdministrador />
            <h3 className="tituloComunaCinco container">
              <br /> <br />
              Establecimientos comuna 5
            </h3>
          </div>
          <div className="row text-center establecimientoCard">
          <div className="col">
          <div className="w-100">
          <img
            className="imagenEstablecimiento " 
            src={BarberiaEsparta}
            alt=""
          ></img>
          <h4 className="t">
            Barberia Esparta <br />
            </h4> 
            <p className="t">
            Dirección: Carrera 70#11130   <br></br>    Nº de personas en el establecimiento: 3   <br></br>           Horario: 10:00 - 9:00 <br></br>
            Domicilio: No disponible </p>
              
          </div>
          </div> 
           </div>
           <div className="row text-center establecimientoCard">
          <div className="col">
          <div className="w-100">
          <img
            className="imagenEstablecimiento"
            src={Celulares}
            alt=""
          ></img>
          <h4 className="t">
            Celulares J&D <br />
            </h4>
            <p className="t">
            Dirección: Carrera 74#10913  <br></br>     Nº de personas en el establecimiento: 7  <br></br> 
          Horario: 8:00 - 9:00 <br></br>  Domicilio: Disponible </p>
              
          </div>
          </div> 
           </div>
           <div className="row text-center establecimientoCard">
          <div className="col">
          <div className="w-100">
          <img
            className="imagenEstablecimiento"
            src={maoTse}
            alt=""
          ></img>
          <h4 className="t">
          maoTse  <br /> 
            </h4>
            <p className="t">
            Dirección: Carrera 65 #11425 <br></br>
             Nº de personas en el establecimiento: 6 <br></br>
             Horario: 11:00 - 10:00<br></br> Domicilio:No disponible </p>
              
          </div>
          </div> 
           </div>
        </div>
      </div>
    );
  }
}
export default Establecimientos1;