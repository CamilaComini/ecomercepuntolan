import React, { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import { CartContext } from '../context/CartContext';
import Button from 'react-bootstrap/Button';
import deleteIcon from '../assets/pngtree-trash-bin-clip-art-png-image_2848384-removebg-preview.png'; 

export const CartTable = () => {
    const { cart, removeList, precioTotal, deleteItem } = useContext(CartContext);

    return (
        <>
            <h1 className="mt-4 mb-3">Lista de compra</h1>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Sub-Total</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                        <tr key={item.id}>
                            <td>
                                {item.title} {item.category}
                            </td>
                            <td>$ {item.price}</td>
                            <td>{item.cantidad}</td>
                            <td>${item.price * item.cantidad}</td>
                            <td style={{ textAlign: 'center' }}>
                                <img
                                    onClick={() => deleteItem(item.id)}
                                    src={deleteIcon}
                                    alt="Eliminar"
                                    style={{
                                        height: '25px',
                                        cursor: 'pointer',
                                    }}
                                />
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan={2}></td>
                        <td>TOTAL</td>
                        <td colSpan={2}>$ {precioTotal()}</td>
                    </tr>
                </tbody>
            </Table>
            <div className="d-flex align-items-center justify-content-between">
                <Button variant="black" onClick={removeList}>
                    VACIAR CARRITO
                </Button>
            </div>
        </>
    );
};
