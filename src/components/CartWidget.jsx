import cartImg from '../assets/png-transparent-shopping-cart-graphy-shopping-cart-furniture-rectangle-black-removebg-preview.png'

export const CartWidget = ({ cant }) => {
	return (
		<>
			<img src={cartImg} title="Carrito" className="cart" height={120}/>
			{cant !== 0 && <p className="contador-cart">{cant}</p>}
		</>
	);
};