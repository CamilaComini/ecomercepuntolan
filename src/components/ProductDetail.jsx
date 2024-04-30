import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { Loading } from './Loading';
import { CartContext } from '../context/CartContext';

export const ProductDetail = () => {
    const [product, setProduct] = useState(null); 
    const [loading, setLoading] = useState(true); 
    const { id } = useParams();
    const { addProduct } = useContext(CartContext);

    useEffect(() => {
        const db = getFirestore();
        const productRef = doc(db, 'items', id);

        getDoc(productRef)
            .then((docSnap) => {
                if (docSnap.exists()) {
                    setProduct({ id: docSnap.id, ...docSnap.data() });
                } else {
                    console.log('No such document!');
                }
            })
            .catch((error) => {
                console.error('Error getting document:', error);
            })
            .finally(() => {
                setLoading(false);  
            });
    }, [id]);

    const add = (quantity) => {
        addProduct(product, quantity);
    };

    if (loading) {
        return <Loading />;
    }
    return (
        <>
            {product ? <ItemDetail product={product} onAdd={add} /> : <p>No se encontró el producto</p>}
        </>
    );
};

