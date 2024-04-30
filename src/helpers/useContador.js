import { useState } from 'react';

const useDatos = () => {
	const [cantidad, setCantidad] = useState(1);

	const sumar = () => {
		setCantidad(cantidad + 1);
	};
	const restar = () => {
		cantidad > 1 && setCantidad(cantidad - 1);
	};
	return { cantidad, sumar, restar };
};

export default useDatos;