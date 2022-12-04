import "./App.css";
import "./global.scss";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search"
import Main from '../src/components/Main/Main.jsx';





import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path='/login' element={<Login />}></Route> */}
          <Route path="/search" element={<Search />}></Route>
          {/* <Route path="/main" element={<Main />}></Route> */}
          <Route path="/app" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
