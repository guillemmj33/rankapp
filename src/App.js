import "./global.scss";
import Home from "./pages/Home/Home";
import Searchbar from "./components/SearchBar/Searchbar";
import Navbar from './components/Navbar/Navbar'
import dataAPI from './data/dataAPI.json';
import { BrowserRouter } from "react-router-dom";
import Router from "./Routes";

function App() {
  
  return (
      <BrowserRouter>
        <div className="App">
          {/* <Searchbar /> */}
          {/* <Navbar/> */}
          {/* <Home/> */}
          <Router/>
        </div>
      </BrowserRouter>
  );
}

export default App;