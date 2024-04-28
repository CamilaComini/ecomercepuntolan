import { ItemCount } from './ItemCount';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const ItemDetail = ({ item }) => {
const { addCart } = useContext(CartContext);
const add = quantity => addCart(item, quantity);
return (
    <>
    <main>
    <section className='container-detail'>
        <h2>{item.title}</h2>
        <img src={item.pictureUrl} height={300}></img>
        <h3>{item.description}</h3>
        <h3>STOCK: {item.stock}</h3>
        <h3>${item.price}</h3>
        <ItemCount onAdd={add} stock={item.stock} />
    </section>
    </main>
    </>
);
};