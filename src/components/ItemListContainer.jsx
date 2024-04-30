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
	const [cars, setCars] = useState([]);
	const category = useParams().categoria;

	useEffect(() => {
		const db = getFirestore();
		const itemCollection = collection(db, 'items');

		if (category) {
			const q = query(
				collection(db, 'items'),
				where('category', '==', category)
			);
			getDocs(q).then((response) =>
				setCars(
					response.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
				)
			);
		} else {
			getDocs(itemCollection).then((response) => {
				setCars(
					response.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
				);
			});
		}
	}, [category]);

	return (
		<div className="container-cards">
			{cars.length === 0 ? <Loading /> : <ItemList cars={cars} />}
		</div>
	);
};