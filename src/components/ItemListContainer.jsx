import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from "./ItemList";
import data from '../data/products.json';

export const ItemListContainer = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const filteredProducts = id ? data.filter(product => product.category === id) : data;
        setProducts(filteredProducts);
    }, [id]);

    return <ItemList products={products} />;
};

export default ItemListContainer;