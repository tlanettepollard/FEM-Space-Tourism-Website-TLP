import React from 'react';
//import { Route, Routes, Navigate, useParams } from 'react-router-dom';
import Header from './layout/Header';
import Home from './pages/Home';
import '../dist/css/main.css';


const App = () => {


  return (
    <>
      <main className='app-main'>
        <Header />
        <Home />
      </main>
    </>
  );
};

export default App;
