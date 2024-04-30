import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const EmptyCart = () => {
	return (
		<div className="empty-cart-container">
			<h1 className="m-4">CARRITO VACIO</h1>
			<Button variant="dark" to="/products" as={Link}>
				Elegir un producto
			</Button>
		</div>
	);
};