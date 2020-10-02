import React from "react";class Registrarse extends React.Component {
  render() {
    return (
      <div className="container-fluid containerDos fondoInicio2">
        <div className="row">
          <div className="col-sm">
            <h1> OpenShop</h1>

           <br />

           <h2> Registro </h2>

           <form>
              <label>
                Nombre del establecimiento:
                <input type="text" name="name" />
              </label>
            </form>

           <form>
              <label>
                Tipo de establecimiento
                <input type="text" name="name" />

              </label>
            </form>
           <br />

           <form>
              <label>
                E-mail:
                <input type="text" name="name" />
              </label>
            </form>

           <form>
              <label>
                Contraseña:
                <input type="text" name="name" />
              </label>
            </form>

           <form>
              <label>
                Confirmar contraseña:
                <input type="text" name="name" />
              </label>
            </form>

           >

           <form>
              <label>
                E-mail:
                <input type="text" name="name" />
              </label>
            </form>

            <form>              <label>
                Contraseña:
                <input type="text" name="name" />
              </label>
            </form>

            <form>              <label>
                Confirmar contraseña:
                <input type="text" name="name" />
              </label>
            </form>

            <button class="Boton2" type="button">
              <a href="inicia">Atrás</a>
            </button>

            <button lass="Boton2" type="button">
              <a href="inicia">Entrar</a>
            </button>
          </div>
        </div>
       </div>
   );
  }
}

export default Registrarse;
