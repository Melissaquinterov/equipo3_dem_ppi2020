import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "../pages/inicio";
import IniciarSesion from "../pages/iniciarSesion";
import Establecimientos from "../pages/establecimientos";
import Registrarse from "../pages/registrarse";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/iniciarSesion" component={IniciarSesion} />
        <Route exact path="/registrarse" component={Registrarse} />
        <Route exact path="/Inicio" component={Establecimientos} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
