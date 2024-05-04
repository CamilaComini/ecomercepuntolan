import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

import { Botones } from './Botones';

export const Item = ({ products }) => {
	return (
		<>
			<Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src={product.img} className="card-img" />
				<Card.Body>
					<Card.Title>
						{product.title} {product.category}
					</Card.Title>
					<Card.Subtitle>
						Precio: $ {product.price.toLocaleString()}
					</Card.Subtitle>
					<Card.Text className="mb-1">
						Categoria: {product.category}
					</Card.Text>

					<Button
						className="mb-2"
						variant="outline-secondary"
						to={`/item/${product.id}`}
						as={NavLink}
						size="sm"
					>
						Info
					</Button>
					<Botones item={product} />
				</Card.Body>
			</Card>
		</>
	);
};
