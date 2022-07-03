import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import Onboarding from './components/Onboarding';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/demo' element={<div><Login /></div>} />
        <Route path='demo/onboarding' element={<div><Onboarding /></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
