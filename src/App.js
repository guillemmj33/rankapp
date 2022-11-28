import React from 'react';
import Redes from './components/Redes/RedesArq'
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
          <Route path='/'></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
