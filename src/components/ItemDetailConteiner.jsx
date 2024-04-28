import Container from "react-bootstrap/Container";
import { CartContext } from "../context/CartContext";
import { useContext, useEffect, useState } from "react";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
const [product, setProduct] = useState(null);
const {items} = useContext(CartContext);

const {id} = useParams();

useEffect(() => {
    const db = getFirestore();

    const refDoc = doc(db, "items", id);

    getDoc(refDoc).then((snapshot) => {
        setProduct({ id: snapshot.id, ...snapshot.data()});
});
}, [id]);


if (!product) return null;

return (
    <>
    <Container className="mt-4">
    <ItemDetail product={product}/>
    </Container>
    </>
);
};