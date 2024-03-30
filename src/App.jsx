import React from 'react';
import { Route, Routes, Navigate, useParams } from 'react-router-dom';
import Home from './pages/Home';
import Destinations from './pages/Destination';
import '../dist/css/main.css';


const App = () => {


  return (
    <div className='App'>
      <main className='app-main'>
        <Routes>
          <React.Fragment>
            <Route path='home' element={<Home />} />
            <Route path='destinations' element={<Destinations />} />
          </React.Fragment>
        </Routes>
      </main>

    </div>
  );
};

export default App;
