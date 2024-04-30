import Button from 'react-bootstrap/Button';
import counter from '../helpers/useContador';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const Botones = ({ item }) => {
	const { addItem } = useContext(CartContext);
	const { cantidad, sumar, restar } = counter();

	return (
		<div className="button-container">
			<Button
				onClick={() => addItem(item, cantidad)}
				className="btn-font"
				variant="dark"
				size="lg"
			>
				Agregar al carrito
			</Button>

			<div className="container-counter">
				<Button
					onClick={restar}
					className={cantidad === 1 ? 'disabled me-2' : 'me-2'}
					style={{ width: '30px' }}
					variant="secondary"
					size="sm"
				>
					-
				</Button>
				<span>{cantidad}</span>
				<Button
					onClick={sumar}
					className="ms-2"
					style={{ width: '30px' }}
					variant="secondary"
					size="sm"
				>
					+
				</Button>
			</div>
		</div>
	);
};