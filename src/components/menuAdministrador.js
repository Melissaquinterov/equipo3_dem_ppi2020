import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

class MenuAdministrador extends React.Component {
  render() {
    return (
      <Navbar className="container-fluid" bg="light" expand="lg">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto ">
            <Nav.Link href="categorias">Categorías</Nav.Link>
            <Nav.Link href="lobby">Perfil</Nav.Link>
            <Nav.Link href="IniciarSesion">Cerrar sesión</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="" className="mr-sm-2" />
            <Button variant="outline-info">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default MenuAdministrador;
