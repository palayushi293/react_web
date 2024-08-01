import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './component/Nav.js';
import About from './component/About';
import Home from './component/Home.js';
import Sign from './component/Sign.js';
import Collections from './component/Collections.js'
import Contat from './component/Contat'; // Assuming you have a Contact component
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contat" element={<Contat />} />
          <Route path="/Sign" element={<Sign/>}/>
          <Route path="/collections" element={<Collections/>}/>

          {/*bus yee wala path Nav.js ke to se match hone chaiye hai bikul same to same*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
