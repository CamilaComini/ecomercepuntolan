import { createContext, useEffect, useState } from "react";
import { agregarAlCarrito } from "../helpers/agregarAlCarrito";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
const [quantity, setquantity] = useState(1);
const [item, setItem] = useState(null);
const carritoLocalStorage = JSON.parse(localStorage.getItem("carrito")) || [];
const [total, setTotal] = useState(0);
const [carrito, setCarrito] = useState(carritoLocalStorage);
const [stockDisponible, setStockDisponible] = useState({});

useEffect(() => {
    const stock = {};
    carrito.forEach((prod) => {
        stock[prod.id] = prod.stock;
    });
    setStockDisponible(stock);
}, [carrito]);

const handleSumar = () => {
    quantity < item.stock && setquantity(quantity + 1);
};

const handleRestar = () => {
    quantity > 1 && setquantity(quantity - 1);
};

const handleAgregarAlCarrito = (item, quantity) => {
    agregarAlCarrito(item, quantity, carrito, setCarrito);
};

const quantityEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.quantity, 0);
};

useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}, [carrito]);

const mostrarCarrito = quantityEnCarrito() > 0;

const vaciarCarrito = () => {
    if (setCarrito) {
    setCarrito([]);
    } else {
    return null;
    }
};

return (
    <CartContext.Provider
    value={{
        item,
        setItem,
        quantity,
        setquantity,
        carrito,
        setCarrito,
        mostrarCarrito,
        handleSumar,
        handleRestar,
        total,
        setTotal,
        handleAgregarAlCarrito,
        quantityEnCarrito,
        vaciarCarrito,
    }}
    >
    {children}
    </CartContext.Provider>
);
};
