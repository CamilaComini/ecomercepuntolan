import { ItemList } from './ItemList';
import { useEffect, useState } from 'react';
import {
	collection,
	getDocs,
	getFirestore,
	query,
	where,
} from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { Loading } from './Loading';

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        setLoading(true);
        let refCollection;

        if (!id) refCollection = collection(db, "items")
        else {
            refCollection = query(collection(db, "items"), where("categoryId", "==", id))
        }

        getDocs(refCollection).then((snapshot) => {
            setProducts(snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
            }));
            setLoading(false);
        });
    }, [id]);

    if (loading) {
        return (
            <>
                <Loading loading={"Cargando productos"} />
            </>
        )
    }

    return (
        <div className="container-cards">
            <Banner gretings={"¡Bienvenidos a Punto Lan!"} />
            <div>
                <ItemList products={products} />
            </div>
        </div>

    );
};
