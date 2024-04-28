import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { NotFound } from './components/NotFound';
import {ItemDetailConteiner} from './components/ItemDetailConteiner';
import { CartProvider } from './context/CartContext';
import { Cart } from "./components/Cart";

function App() {
	return (
		<CartProvider>
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="*" element={<NotFound />}/>
				<Route path="/" element={<ItemListContainer />}/>
				<Route path="/cart" element={<Cart/>}/>
				<Route path="/category/:id" element={<ItemListContainer />}/>
				<Route path="/item/:id" element={<ItemDetailConteiner />}/>
			</Routes>
		</BrowserRouter>
		</CartProvider>
	);
}

export default App;
