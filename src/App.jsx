import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import  ItemListContainer   from './components/ItemListContainer';
import { Home } from './components/Home';
import { CartProvider } from './context/CartContext';
import './App.css';
import  ItemDetailContainer   from './components/ItemDetailContainer';
import { Cart }  from './components/Cart';
import { ToastContainer } from 'react-toastify';
import { Footer } from './components/Footer';

function App() {
	return (
		<>
			<ToastContainer />
			<CartProvider>
				<BrowserRouter>
					<NavBar />
					<Routes>
						<Route path="/cart" element={<Cart />} />
						<Route path="/" element={<Home />} />
						<Route
							path="/products"
							element={<ItemListContainer />}
						/>
						<Route
							path="/products/:categoria"
							element={<ItemListContainer />}
						/>
						<Route path="/products/:id" element={ <ItemDetailContainer/>} />
						<Route path="*" element="ERROR 404" />
					</Routes>
					< Footer />
				</BrowserRouter>
			</CartProvider>
		</>
	);
}

export default App;