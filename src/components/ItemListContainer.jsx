import { ItemList } from './ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Loading } from './Loading';
import { collection, getFirestore, getDocs, query, where } from 'firebase/firestore';

export const ItemListContainer = () => {
    const [items, setitems] = useState([]);
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
            setitems(snapshot.docs.map((doc) => {
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
        <div className='min-h-max'>
            <div className="flex flex-wrap justify-center items-center gap-4 my-4">
                <ItemList items={items} />
            </div>
        </div>

    );
};