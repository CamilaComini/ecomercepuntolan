import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/products.json';
import 'bootstrap/dist/css/bootstrap.min.css';


export const ItemDetailContainer = () => {
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
        <Container className="mt-4">
            <div>{product.title}</div>
            <img src={pictureUrl.img} alt={product.title} />
        </Container>
		
	);
};
