// he borrado el footer porque no lo podia comentar
import './App.css';
import './global.scss';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/search' element={<Search />}></Route>
            <Route path='/main' element={<Main />}></Route>
        </Routes>        
      </Router>
    </div>
  );
}

export default App;
