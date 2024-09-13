import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './component/Nav.js';
import About from './component/About';
import Home from './component/Home.js';
import Sign from './component/Sign.js';
import Financing from "./component/Financing.js"
import Collections from './component/Collections.js'
// Assuming you have a Contact component
import './App.css';

function App() {
  


  return (
    <div className="App">
      <Router>
        <Nav  
          home="Home"
          about="About"
          financing="Financing"
          sample="Sample"/>
        <Routes>
          <Route path="/" element={<Home test="Testimonials" head="THE BEST WAY TO BUY A CAR" explain=" At Maruti, we believe that our relationship doesn’t end with
              getting you a new car. It's just the beginning of a long
              relationship that will need constant support and quality
              experience. Bimal is Bangalore’s largest Maruti Suzuki car
              dealership serving customers throughout the city from its 34+
              locations, providing a comfortable and superior experience."  
              
              cos1re="   The service personnel take very good care of the car. Best car
                service center I could find in Bangalore. Especially I
                appreciate Mr. Ahmed, who is always ready to help and remembers
                each customer and the details about their car’s previous
                service. Thanks for the good service experience. Thanks Bimal."
                
                name1="~ Tintu Jessy Joseph"
                cos2=" This is one of the best showrooms with top-notch customer
                service. We just walked into the place not so sure about our
                choices, but Mr. Vedamurthy was really helpful and polite to
                explain to us and guide us throughout from the beginning till
                the delivery. We had an excellent experience. This place is
                definitely recommended."
                cosname="~ Nithi P"
                
                cos3=" We contacted Bimal Auto Agency in Whitefield, Bangalore to buy
                our first car and they were extremely helpful. They helped us
                with everything. Especially the sales executive Mr. Rama
                Krishna was outstanding in his customer service. They helped us
                even more with discounts, the loan process, and even the test
                drive was a pleasant experience."
                cosn="~ Jancy Joseph"
                
                start="WELCOME TO MARUTI!"/>} />


          <Route path="/about" element={<About />} />
          <Route path="/financing" element={<Financing/>} />
          <Route path="/Sign" element={<Sign/>}/>
          <Route path="/collections" element={<Collections/>}/>

          {/*bus yee wala path Nav.js ke to se match hone chaiye hai bikul same to same*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
