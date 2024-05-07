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

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
	const { id } = useParams()

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
        return (
            <div className='min-h-max'>
                <div className="flex flex-wrap justify-center items-center gap-4 my-4">
                    <ItemList products={products} />
                </div>
            </div>
	);
};


export default ItemListContainer;