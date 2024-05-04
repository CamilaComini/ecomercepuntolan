import { Container } from 'react-bootstrap';
import { CartTable } from './CartTable';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { EmptyCart } from './EmptyCart';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Link } from 'react-router-dom';
import {
	addDoc,
	serverTimestamp,
	collection,
	getFirestore,
} from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import nots from '../helpers/useNotifications';
import { CompraFinal } from './CompraFinal';

export const Cart = () => {
	const { cart, precioTotal, removeList } = useContext(CartContext);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const { notiToastCompra } = nots();
	const [orderId, setOrderId] = useState('');

	const productos = cart.map((product) => ({
		id: product.id,
		descripcion: product.descripcion,
		category: product.model,
		stock: product.cantidad,
		price: product.price,
	}));

	const comprar = (data) => {
		const order = {
			buyer: data,
			item: productos,
			date: serverTimestamp(),
			total: precioTotal(),
		};
		const db = getFirestore();
		const orderRef = collection(db, 'orders');
		addDoc(orderRef, order).then((doc) => {
			setOrderId(doc.id);
			removeList();
		});
		notiToastCompra();
	};
	if (orderId) {
		return <CompraFinal order={orderId} />;
	}
	return (
		<>
			<Container>
				{cart.length === 0 ? (
					<EmptyCart />
				) : (
					<>
						<CartTable />
						<div className="container-form">
							<h2 className="mt-4 mb-4">Datos del comprador</h2>
							<Form
								onSubmit={handleSubmit(comprar)}
								className="w-50"
							>
								<Form.Group>
									<FloatingLabel
										label="Nombre y Apellido"
										className="mb-3"
									>
										<Form.Control
											type="text"
											placeholder=""
											{...register('nombre', {
												required:
													'Nombre es obligatorio',
											})}
										/>
										{errors.nombre && (
											<Form.Text className="text-danger">
												{errors.nombre.message}
											</Form.Text>
										)}
									</FloatingLabel>
								</Form.Group>
								<Form.Group>
									<FloatingLabel
										label="E-mail"
										className="mb-3"
									>
										<Form.Control
											type="text"
											placeholder=""
											{...register('mail', {
												required:
													'E-mail es obligatorio',
											})}
										/>
										{errors.mail && (
											<Form.Text className="text-danger">
												{errors.mail.message}
											</Form.Text>
										)}
									</FloatingLabel>
								</Form.Group>
								<Form.Group>
									<FloatingLabel
										label="Teléfono"
										className="mb-3"
									>
										<Form.Control
											type="text"
											placeholder=""
											{...register('telefono', {
												required:
													'Teléfono es obligatorio',
											})}
										/>
										{errors.telefono && (
											<Form.Text className="text-danger">
												{errors.telefono.message}
											</Form.Text>
										)}
									</FloatingLabel>
								</Form.Group>
								<Button variant="dark" type="submit">
									Realizar compra
								</Button>

								<Button
									className="ms-2"
									variant="secondary"
									size="sm"
									to="/products"
									as={Link}
								>
									Continuar comprando
								</Button>
							</Form>
						</div>
					</>
				)}
			</Container>
		</>
	);
};