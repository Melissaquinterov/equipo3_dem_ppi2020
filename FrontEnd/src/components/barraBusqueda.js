  
import React from "react";

class barraBusqueda extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col">
        
          <form className="buscador">
            <div className="form-group">
            <button className="btn btn-light my-2 my-sm-0, botonBusqueda" type="submit">Q</button>
              <input 
                onChange={this.props.OnchangeFiltro}
              
                className="form-control, barraBusqueda"
                type="text"
                placeholder="Busca un establecimiento"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default barraBusqueda;