import React from 'react';
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

export const NotFound = () => {
	return (
		<Container>
			<img src="./assets/logopuntolan.ico" alt="PuntoLan"  height={100} />
					<Alert className="mt-5" variant="danger">
                <Alert.Heading>Error 404</Alert.Heading>
        <p>Oops, la pagina o el producto que estas buscando no fue encontrado</p>
        <hr />
		<div className="d-flex justify-content-end">
                <Link to="/">
	                <Button className="btn btn-danger">Volver a Inicio</Button>
                </Link>
        </div>
                </Alert>
        </Container>
	);
};

