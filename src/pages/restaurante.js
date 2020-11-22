import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Menu from "../components/menu";
import Axios from "axios";
import TarjetaEstablecimiento from "../components/tarjetaEstablecimiento";
import Logo from "../components/Logo";

const Restaurante = () => {
	const [restaurantes, setRestaurantes] = useState([]);

	useEffect(() => {
		Axios.get("https://1kfuq.csb.app/restaurantes")
			.then((response) => {
				const data = response.data.rows;
				console.log(data);
				setRestaurantes(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
    // d-flex justify-content-center flex-column mt-3 rounded
		<div className="container bg-cian">
			<div className="row">
				<div className="col-12">
					<Logo />
				</div>
				<div className="col-12">
					<Menu />
				</div>
				<div className="col-12">
					<h4 className="text-center">
						Establecimientos comuna 5: <br /> Categoría Restaurante
					</h4>
					<div className="row">
						{restaurantes.map((restaurante, i) => {
							return (
								<div className="col-12 col-md-6" key={i}>
									<TarjetaEstablecimiento
										nombre={restaurante.Nomnbreestablecimiento}
										direccion={restaurante.Dirrecion}
										imagen={restaurante.imagenes}
										personas={restaurante.Ndepersonas}
										horario={restaurante.Horario}
										domicilios={restaurante.Domicilios}
									></TarjetaEstablecimiento>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Restaurante;
