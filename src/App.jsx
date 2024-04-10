import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { NavBar } from '../components/Navbar';
import { ItemListContainer } from '../components/ItemListContainer';
import { NotFound } from '../components/NotFound';
import ItemDetailContainer from '../components/ItemDetailConteiner';

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="*" element={<NotFound />}/>
				<Route path="/" element={<ItemListContainer />}/>
				<Route path="/category/:id" element={<ItemListContainer />}/>
				<Route path="/item/:id" element={<ItemDetailContainer />}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;