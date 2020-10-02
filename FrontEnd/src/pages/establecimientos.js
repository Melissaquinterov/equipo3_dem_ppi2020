import React from "react";
import Header from "../components/header";
import TarjetaEstablecimiento from "../components/tarjetaEstablecimiento";
import BarraBusqueda from "../components/barraBusqueda";
import Menu from "../components/menu";

class Establecimientos extends React.Component {
  render() {
    return (
      <div>
        
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
          </div>
          <Header/>
          <Menu/>
        <BarraBusqueda/>
          <h3>Establecimientos comuna 5</h3>
        <TarjetaEstablecimiento/>
        </div>
      </div>
      </div>
    );
  }
}
export default Establecimientos;


