import { Item } from './Item';

export const ItemList = ({products}) => {
	return products.map((product) => <Item key={product.id} product={product} />);
};