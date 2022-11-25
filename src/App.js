import './App.css';
import './global.scss';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Info from './pages/Info/Info';

import { 
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/search' element={<Search />}></Route>
            <Route path='/info:id' element={<Info />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
