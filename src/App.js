import './App.css';
import './global.scss';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Navbar from './components/Navbar/Navbar.jsx';
import Trending from './components/Trending/Trending';
import MediasDesktop from './components/Medias/MediasDesktop';




import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Route>
        {/* <MediasDesktop></MediasDesktop>
        <Navbar/>
        <Addapp/>
        <Trending/> */}
        
        <Routes>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/inicio' element={<Inicio/>}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/search' element={<Search />}></Route>
            <Route path='/info:id' element={<Info />}></Route>
        </Routes>
        
      </Route>
    </div>
  );
}

export default App;
