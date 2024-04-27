import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/products.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


export const ItemDetailConteiner = () => {
	const [item, setItem] = useState(null);

	const { id } = useParams();

	useEffect(() => {
		const getProducts = () => {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve(data);
				}, 2000);
			});
		};

		getProducts().then((data) => {
			const filteredData = data.find((d) => d.id === Number(id));
			setItem(filteredData);
		});
	}, [id]);

	if (!item)
		return (null);

	return (
        <>
		<Container className="d-flex justify-content-center">
    <Card className="mt-5" style={{ width: "52rem" }}>
        <div className="d-flex">
        <div>
            <Card.Img
            className="div-img img-fluid"
            variant="top"
            src={item.pictureUrl}
            />
        </div>
        <Card.Body className="">
            <Card.Text>{item.category}</Card.Text>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Card.Text>
            <b>{item.price}</b>
            </Card.Text>
            <Button variant="primary">Comprar</Button>
        </Card.Body>
        </div>
    </Card>
    </Container>
	</>
);
};





