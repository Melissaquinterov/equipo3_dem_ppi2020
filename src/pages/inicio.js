import React from "react";
import "../style/style.css";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

class Inicio extends React.Component {
	render() {
		return (
			<div
				className="fondoblanco d-flex justify-content-center align-items-center"
				style={{ width: "100%", height: "100vh" }}
			>
				<div className=" border  row text-center shadow-lg bg-cian p-4">
					<div className="col-12 mt-4">
						<Logo />
						<button className="botoninit" type="button">
							<a className="text-dark" href="categorias">
								Inicio
							</a>
						</button>
						<h1>..........................</h1>
						<p>¿Eres dueño de algun establecimiento?</p>

						<button className="botoninit" type="button" >
							<Link className="text-dark" to="iniciarSesion">
								Inicio sesión
							</Link>
						</button>
							<br/>
						<button className="botoninit" type="button">
							<Link className="text-dark" to="registrarse">
								Registro
							</Link>
						</button>
					</div>
				</div>
			</div>
		);
	}
}
export default Inicio;
