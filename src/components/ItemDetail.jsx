import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Botones } from './Botones';

export const ItemDetail = ({ product }) => {
	return (
		<div className="container-product-detail">
			<img className="img-detail" src={product.pictureUrl} />
			<div className="item-detalles">
				<h1>{product.title}</h1>
				<h2>
					Categoria y Cantidad: {product.category} {product.stock}
				</h2>
				<h3>Precio: $ {product.price.toLocaleString()}</h3>
				<p>{product.descripcion}</p>
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