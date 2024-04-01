import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import data from './data.json';

import '../dist/css/main.css';


const App = () => {


  return (
    <div className='App'>
      <main className='app-main'>
        <Routes>
          <Route exact path='/FEM-Space-Tourism-Website-TLP' />
          <Route path='/home' element={<Home />} />
          <Route path='/destinations' element={<Destinations data={data.destinations} />} />
          <Route path='/crew' element={<Crew />} />
          <Route path='/technology' element={<Technology />} />
        </Routes>
      </main>

    </div>
  );
};

export default App;
