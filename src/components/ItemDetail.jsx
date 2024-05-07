import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Botones } from './Botones';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const ItemDetail = ({ product }) => {
    const { addProduct } = useContext(CartContext);

    const add = (quantity) => {
        addProduct(product, quantity);
    };
	return (
		<div className="container-product-detail">
			<img className="img-detail" src= {product?.imageUrl} />
			<div className="item-detalles">
				<h1>Detalle del producto</h1>
				<h2>
					Nombre del producto: {product?.title} 
				</h2>
				<h3>Precio: $ {product?.price.toLocaleString()}</h3>
				<p>{product?.description}</p>
				<Botones />
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