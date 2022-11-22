import './App.css';
import './global.scss';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
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
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
