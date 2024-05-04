import { useEffect, useState } from 'react';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { ItemList } from './ItemList'; 
import { Loading } from "./Loading";

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [productImages, setProductImages] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        setLoading(true);
        let refCollection;

        if (!id) refCollection = collection(db, "products")
        else {
            refCollection = query(collection(db, "products"), where("categoryId", "==", id))
        }

        getDocs(refCollection).then((snapshot) => {
            const productsData = snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
            });
            setProducts(productsData);
            setLoading(false);

            const storage = getStorage();
            const promises = productsData.map((product) => {
                const imageUrlRef = ref(storage, 'productos/' + product.id); 
                return getDownloadURL(imageUrlRef);
            });
            Promise.all(promises).then((urls) => {
                setProductImages(urls);
            }).catch((error) => {
                console.error('Error al obtener las URLs de las imágenes:', error);
            });
        }).catch((error) => {
            console.error('Error al obtener los productos:', error);
        });
    }, [id]);

    if (loading) {
        return (
                <Loading loading="Cargando"/> 
        )
    }

    return (
        <div className="container-cards">
            <h1>Lista de productos:</h1>
            <ItemList/>
            </div>
    );
};
