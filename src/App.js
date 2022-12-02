import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Redes from './components/redes/RedesArq'

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
            <Route path='/home' element={<Home />}></Route>
            <Route path='/search' element={<Search />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
