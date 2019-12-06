import React from 'react';
import logo from './logo.png';
import './App.css';
import vmcard from './vmcard.png';

function App() {
  return (

    <div className="main-sec" >

      <h1 className="card-name ">Credit card</h1>
      <img className="card-logo" src={logo} />
      <div className="card-info">
        <div className="column">
          <p className="card-glob-num">1452 1487 3952 8546</p>
          <p className='label'>MONTH/YEAR</p>
          <div className="num-label" >

            <p id="num4" className="bold">5478</p>

            <div className="date" >

              <span>Valid<br /> thru  </span>
              <i class="fas fa-caret-right"></i>
              <p className="bold"> 06/2027</p>

            </div>

          </div>
          <p className="bold">Cardholder</p>
        </div>

        <img className="card-logo2" src={vmcard} />
      </div>
    </div>
  );
}

export default App;
