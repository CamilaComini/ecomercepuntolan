import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Botones } from './Botones';

export const ItemDetail = ({ items }) => {
	return (
		<div className="container-product-detail">
			<img className="img-detail" src={items.pictureUrl} />
			<div className="item-detalles">
				<h1>Detalle del producto</h1>
				<h2>
					Nombre: {items.title}
				</h2>
				<h3>Precio: $ {items.price.toLocaleString()}</h3>
				<p>{items.description}</p>
				<Botones item={items} />
				<Button
					style={{ width: '80px' }}
					variant="dark"
					to="/products"
					as={Link}
				>
					Volver
				</Button>
			</div>
		</div>
	);
};