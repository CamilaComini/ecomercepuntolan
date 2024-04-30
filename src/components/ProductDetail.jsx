import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

import { ItemDetail } from './ItemDetail';
import { Loading } from './Loading';

export const ProductDetail = () => {
    const [carPorId, setCarPorId] = useState(null); 
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const autoRef = doc(db, 'items', id);

        getDoc(autoRef)
            .then((docSnap) => {
                if (docSnap.exists()) {
                    setCarPorId({ id: docSnap.id, ...docSnap.data() });
                } else {
                    console.log('No such document!');
                }
            })
            .catch((error) => {
                console.error('Error getting document:', error);
            });
    }, [id]); // Sólo se ejecutará el efecto si id cambia

    return (
        <>
            {carPorId ? <ItemDetail item={carPorId} /> : <Loading />} 
            {/* Si carPorId es null, mostrará el componente de Loading */}
        </>
    );
};
