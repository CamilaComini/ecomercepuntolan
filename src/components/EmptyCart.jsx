import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const EmptyCart = () => {
	return (
		<div className="empty-cart-container">
			<h1 className="m-4">Descubre un mundo de posibilidades con la tecnología que transformará tu vida para siempre...</h1>
			<Button variant="dark" to="/products" as={Link}>
			¡Listo para elegir tu próximo producto tecnológico! 
			</Button>
		</div>
	);
};