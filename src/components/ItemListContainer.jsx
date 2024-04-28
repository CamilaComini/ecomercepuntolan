import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import { ItemList } from "./ItemList";
import {
    getFirestore,
    getDocs,
    query,
    where,
    collection,
} from "firebase/firestore";


export const ItemListContainer = () => {
const [products, setProducts] = useState([]);
const { id } = useParams();

useEffect(() => {
    const db = getFirestore();
    let refCollection;

    if (!id) refCollection = collection(db, "items"); 
    else{
        refCollection = query(
            collection(db, "items"),
            where("categoryId","==", id)
        );
    }
});
}