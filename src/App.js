<<<<<<< HEAD
import './App.css';
import './global.scss';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Info from './pages/Info/Info';
import Navbar from './components/Navbar/Navbar.jsx';
import Trending from './components/Trending/Trending';
import MediasDesktop from './components/Medias/MediasDesktop';
=======
import "./App.css";
import "./global.scss";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search"
import Main from '../src/components/Main/Main.jsx';

>>>>>>> mamadouDev




import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Router>
        <MediasDesktop></MediasDesktop>
        <Navbar/>
        <Trending/>

        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/search' element={<Search />}></Route>
            <Route path='/info:id' element={<Info />}></Route>
        </Routes>
        
      </Router>
=======
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path='/login' element={<Login />}></Route> */}
          <Route path="/search" element={<Search />}></Route>
          {/* <Route path="/main" element={<Main />}></Route> */}
          <Route path="/app" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
>>>>>>> mamadouDev
    </div>
  );
}

export default App;
