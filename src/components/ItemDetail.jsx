import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Botones } from './Botones';

export const ItemDetail = ({ item }) => {
	return (
		<div className="container-product-detail">
			<img className="img-detail" src={item.pictureUrl} />
			<div className="item-detalles">
				<h1>{item.title}</h1>
				<h2>
					Categoria y Cantidad: {item.category} {item.stock}
				</h2>
				<h3>Precio: $ {item.price.toLocaleString()}</h3>
				<p>{item.desc}</p>
				<Botones item={item} />
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