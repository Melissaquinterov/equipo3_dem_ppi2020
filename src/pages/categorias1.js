import React from "react";
import "../style/style.css";
import BarberiaEsparta from "../images/belleza.png";
import Farmacia from "../images/farmacia.png";
import Carniceria from "../images/restaurante.png";
import Celulares from "../images/tecnologia.png";
import Header from "../components/header";
import MenuCategoriaAdm from "../components/menuCategoriaAdm";

class categorias1 extends React.Component {
  render() {
    return (
      <div className=" container-fluid container fondoInicio9">
        <div className="container">
          <Header />
          <h1 className="container2 container">OpenShop</h1>
          <MenuCategoriaAdm />

          <div className="container row">
            <div className="col-sm"></div>

            <div class="row row-cols-1 row-cols-md-2">
              <div class="col mb-4">
                <div class="card">
                  <img src={Farmacia} class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <a href="drogueria">Droguería</a>
                  </div>
                </div>
              </div>
              <div class="col mb-4">
                <div class="card">
                  <img src={Celulares} class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <a href="tecnologia">Tecnología</a>
                  </div>
                </div>
              </div>
              <div class="col mb-4">
                <div class="card">
                  <img
                    src={BarberiaEsparta}
                    class="card-img-top"
                    alt="..."
                  ></img>
                  <div class="card-body">
                    <a href="Belleza">Belleza</a>
                  </div>
                </div>
              </div>
              <div class="col mb-4">
                <div class="card">
                  <img src={Carniceria} class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <a href="restaurante">Restaurante</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default categorias1;
