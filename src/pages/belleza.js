import React from "react";
import Header from "../components/header";
import BarberiaEsparta from "../images/barberiaEsparta.jpg";
import ThimsColor from "../images/thimsColor.jpg";
import Menu from "../components/menu";

class Belleza extends React.Component {
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
                Establecimientos comuna 5: <br></br> Categoría Droguería
            </h3>
            <br></br>
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
            Domicilio: No disponible</p>
              
          </div>
          </div> 
           </div>
           <div className="row text-center establecimientoCard">
          <div className="col">
          <div className="w-100">
          <img
            className="imagenEstablecimiento"
            src={ThimsColor}
            alt=""
          ></img>
          <h4 className="t">
          Thim´s Colors <br />
            </h4>
            <p className="t">
            Dirección: Carrera 70#110-28<br></br>    Nº de personas en el establecimiento: 2   <br></br>       Horario: 8:00 - 7:00 <br></br>
            Domicilio: Disponible
             </p>
             
          </div>
          </div> 
           </div>
        </div>
      </div>
    );
  }
}
export default Belleza;