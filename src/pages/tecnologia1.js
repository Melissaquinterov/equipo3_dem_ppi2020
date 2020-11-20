import React from "react";
import Header from "../components/header";
import BemaCell from "../images/bemaCell.jpeg";
import Celulares from "../images/celulares.jpg";
import MenuAdministrador from "../components/menuAdministrador";

class Tecnologia1 extends React.Component {
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
                Establecimientos comuna 5: <br></br> Categoría Tecnología
            </h3>
            <br></br>
          </div>
          <div className="row text-center establecimientoCard">
          <div className="col">
          <div className="w-100">
          <img
            className="imagenEstablecimiento " 
            src={BemaCell}
            alt=""
          ></img>
          <h4 className="t">
          Bema.Cell <br />
            </h4> 
            <p className="t">                             Dirección: Carrera 98#69-06 Local 102  <br></br>     Nº de personas en el establecimiento: 1  <br></br> 
          Horario: 10:00 - 8:00 <br></br>  Domicilio: Disponible</p>
              
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
          Horario: 8:00 - 9:00 <br></br>  Domicilio: Disponible  </p>
              
          </div>
          </div> 
           </div>
        </div>
      </div>
    );
  }
}
export default Tecnologia1;
