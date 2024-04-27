import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import data from "../data/product.json";
import { ItemList } from "./ItemList";

export const ItemListContainer = () => {
const [products, setProducts] = useState([]);

const { id } = useParams();

useEffect(() => {
    const get = new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), 2000);
    });
    get.then((data) => {
    const filteredData = id ? data.filter((d) => d.category === id) : data;
    setItems(filteredData);
    });
}, [id]);

return (
    <Container>
    <div className="d-flex flex-wrap justify-content-around">
        <ItemList products={products} />
    </div>
    </Container>
);
};