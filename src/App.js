import './App.css';
import './global.scss';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Inicio from './pages/Inicio/Inicio';
import Login from './pages/Login/Login';
// import Navbar from './components/Navbar/Navbar.jsx';
// import Addapp from './components/AddApp/Addapp.jsx';
// import Trending from './components/Trending/Trending';
// import MediasDesktop from './components/Medias/MediasDesktop';


import { 
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <MediasDesktop></MediasDesktop>
        <Navbar/>
        <Addapp/>
        <Trending/> */}
        
        <Routes>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/inicio' element={<Inicio/>}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/search' element={<Search />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
