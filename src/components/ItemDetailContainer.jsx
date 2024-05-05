import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ItemDetail } from './ItemDetail';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { Loading } from './Loading';

export const ItemDetailContainer = () => {
	const [itemsPorId, setItemsPorId] = useState();
	const id = useParams().id;

	useEffect(() => {
		const db = getFirestore();

		const product = doc(db, 'items', id);

		getDoc(product).then((response) => {
			response.exists() && setItemsPorId({ id: id, ...response.data() });
		});
	}, [itemsPorId]);

	return <>{!itemsPorId ? <Loading /> : <ItemDetail item={itemsPorId} />}</>;
};