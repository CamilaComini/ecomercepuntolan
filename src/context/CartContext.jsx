import { createContext, useState } from 'react';
import nots from '../helpers/useNotifications';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const { notiToastWarn, notiToastSuccess, notiToastError } = nots();

	const removeList = () => setCart([]);

	const addItem = (item, cantidad) => {
		const itemAAgregar = { ...item, cantidad };
		const carrito2 = [...cart];
		const estaEnCart = carrito2.find((item) => item.id === itemAAgregar.id);
		if (estaEnCart) {
			estaEnCart.cantidad += cantidad;
			notiToastWarn();
		} else {
			carrito2.push(itemAAgregar);
			setCart(carrito2);
			notiToastSuccess();
		}
	};

	const deleteItem = (id) => {
		const lugarEnCarrito = cart.findIndex((prod) => prod.id === id);
		const carritoAlt = [...cart];
		carritoAlt.splice(lugarEnCarrito, 1);
		setCart(carritoAlt);
		notiToastError();
	};

	const precioTotal = () => {
		return cart.reduce((acc, item) => acc + item.price * item.cantidad, 0);
	};

	return (
		<>
			<CartContext.Provider
				value={{
					cart,
					setCart,
					removeList,
					addItem,
					precioTotal,
					deleteItem,
				}}
			>
				{children}
			</CartContext.Provider>
		</>
	);
};