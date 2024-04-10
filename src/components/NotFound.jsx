import React from 'react';
import '../../style/NotFound.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export const NotFound = () => {
	return (
		<div className="notFound">
			<img src={logopuntolan.ico} alt="PuntoLan"  height={100} />
			<div className="description">
				<h2>Not Found</h2>
				<p>Oops, este producto no fue encontrado</p>
			</div>
		</div>
	);
};