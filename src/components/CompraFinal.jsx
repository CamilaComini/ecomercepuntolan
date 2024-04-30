import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const CompraFinal = ({ order }) => {
	return (
		<div className="empty-cart-container">
			<h1 className="m-4">Muchas gracias por tu compra!</h1>
			<h5 className="mb-4">
				Tu número de pedido es el siguiente: {order}
			</h5>
			<Button variant="dark" to="/products" as={Link}>
				Realizar otra compra
			</Button>
		</div>
	);
};