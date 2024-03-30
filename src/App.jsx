import React from 'react';
import { Route, Routes, Navigate, useParams } from 'react-router-dom';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Crew from './pages/Crew';
import Technology from './pages/Technology';

import '../dist/css/main.css';


const App = () => {


  return (
    <div className='App'>
      <main className='app-main'>
        <Routes>
          <React.Fragment>
            <Route path='/' element={<Home />} />
            <Route path='destinations' element={<Destinations />} />
            <Route path='crew' element={<Crew />} />
            <Route path='technology' element={<Technology />} />
          </React.Fragment>
        </Routes>
      </main>

    </div>
  );
};

export default App;
