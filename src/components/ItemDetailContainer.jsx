import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getFirestore, getDoc, doc } from 'firebase/firestore';
import { ItemDetail } from './ItemDetail';
import { Loading } from './Loading';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        setLoading(true);
        const refDoc = doc(db, "items", id);

        getDoc(refDoc).then((snapshot) => {
            setProduct({ id: snapshot.id, ...snapshot.data() });
            setLoading(false);
        });

    }, [id]);

    if (loading) {
        return (
            <>
                <Loading loading={"Cargando producto"} />
            </>
        )
    }

    return (
        <div className='min-h-max'>
            <div className="flex flex-col flex-wrap justify-center items-center gap-4 my-4">
                <ItemDetail product={product} />
            </div>
        </div>

    );
};

export default ItemDetailContainer;