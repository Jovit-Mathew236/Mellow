import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import React from 'react';

import Login from './components/Login';
import Onboarding from './components/Onboarding';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/login' element={<div><Login /></div>} />
        <Route path='/onboarding' element={<div><Onboarding /></div>} />
        <Route path='/' element={<div><Home/> </div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;