import './App.css';
import './global.scss';
import Navbar from './components/Navbar/Navbar.jsx';
// import Trending from './components/Trending/Trending';
// import MediasDesktop from './components/Medias/MediasDesktop';
// import Addapp from './components/AddApp/Addapp';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Info from './pages/Info/Info';
import Inicio from './pages/Inicio/Inicio';

import { 
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Router>
        {/* <MediasDesktop></MediasDesktop> */}
        <Navbar/>
        {/* <Addapp/>
        <Trending/> */}
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/search' element={<Search />}></Route>
            <Route path='/info:id' element={<Info />}></Route>
            <Route path= '/Inicio' element= {<Inicio/>}></Route>
        </Routes>
        </Router>
        
    </div>
  );
}

export default App;
