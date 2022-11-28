import './App.css';
import './global.scss';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Redes from './components/redes/RedesArq';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <h1> hola </h1>
      </Router>
    </div>
  );
}

export default App;
