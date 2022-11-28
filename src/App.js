import './App.css';
import './global.scss';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';

import Navbar from './components/Navbar/Navbar.jsx';

import { 
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <Redes />
        <Routes>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/search' element={<Search />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
