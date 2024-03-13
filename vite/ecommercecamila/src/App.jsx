import './App.css';
import { Navbar } from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  return (  
  <>
  <Navbar/>
  <ItemListContainer greeting="¡Contamos con artículos gamer de la mejor calidad!"/>
  </>
  );
}

export default App
