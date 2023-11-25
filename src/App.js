// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

import Home from './Home';
import AnimalsAvailable from './AnimalsAvailable';
import LocationsToAdopt from './AdoptionLocation';
import AdoptionForm from './AdoptionForm'; 

import data from './Animals.json';

function App() {
  return (
    <Router>
      <div>
        <nav className='nav'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/animalsavailable">Animals Available</Link>
            </li>
            <li>
              <Link to="/locations">Locations to Adopt</Link>
            </li>
            <li>
              <Link to="/adoptionform">Adopt an Animal</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/animalsavailable" element={<AnimalsAvailable data={data} />} />
          <Route path="/locations" element={<LocationsToAdopt />} />
          <Route path="/adoptionform" element={<AdoptionForm />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
