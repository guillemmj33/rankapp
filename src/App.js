import "./App.css";
import "./global.scss";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/SearchBar/Searchbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Searchbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path='/login' element={<Login />}></Route> */}
            <Route path='/home' element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
