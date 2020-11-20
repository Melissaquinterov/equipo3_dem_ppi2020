import React from "react";
import Header from "../components/header";
import MenuAdministrador from "../components/menuAdministrador";
import DrogFarma from "../images/drogFarma.jpeg";
import Farmacenter from "../images/farmacenter.jpg";

class Drogueria1 extends React.Component {
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
                Establecimientos comuna 5: <br></br> Categoría Droguería
            </h3>
            <br></br>
          </div>
          <div className="row text-center establecimientoCard">
          <div className="col">
          <div className="w-100">
          <img
            className="imagenEstablecimiento " 
            src={DrogFarma}
            alt=""
          ></img>
          <h4 className="t">
            DrogFarma <br />
            </h4> 
            <p className="t">
            
            Dirección: Carrera 67B#116-5 <br></br> Nº de personas en el establecimiento: 3 <br></br> Horario: 11:00 - 9:00 <br></br> Domicilio: Disponible</p>
              
          </div>
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
            Dirección: Carrera 70#110-28 <br></br> Nº de personas en el establecimiento: 6 <br></br> Horario: 8:00 - 8:00 <br></br> Domicilio: Disponible </p>
             
          </div>
          </div> 
           </div>
        </div>
      </div>
    );
  }
}
export default Drogueria1;