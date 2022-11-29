<<<<<<< HEAD

import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/SearchBar/Searchbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
=======
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
>>>>>>> develop

function App() {
  return (
    <div className="App">
      <Router>
        <Searchbar />
        <Navbar />
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<Home />}></Route>
          {/* <Route path='/login' element={<Login />}></Route> */}
            <Route path='/home' element={<Home />}></Route>
=======
            <Route path='/' element={<Home />}></Route>
            <Route path='/search' element={<Search />}></Route>
            <Route path='/info:id' element={<Info />}></Route>
>>>>>>> develop
        </Routes>
      </Router>
    </div>
  );
}

export default App;
