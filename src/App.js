import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, {useEffect,useContext} from 'react';
import { AuthContext, FirebaseContext } from './store/Contexts'

import Login from './components/Login';
import Onboarding from './components/Onboarding';
import Home from './components/Home';
import Signup from './components/Signup';

function App() {
  const { firebase } = useContext(FirebaseContext)
  const {setUser} = useContext(AuthContext)
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user)=>{
            setUser(user)
        })
    })
  return (
    <div>
      <p className='logo-img'>  </p>

      <BrowserRouter basename='/demo'>
        {/* <div>
        <img src="./images/logomellow.png" alt="" style="position: absolute;width: 186px;height: 98px;left: 141px;top: 8px;" />
      </div> */}
        <Routes>
          <Route path='/login' element={<div><Login /></div>} />
          <Route path='/onboarding' element={<div><Onboarding /></div>} />
          <Route path='/demo' element={<div><Home /> </div>} />
          <Route path='/signup' element={<div><Signup /> </div>} />
        </Routes>
      </BrowserRouter></div>
  );
}

export default App;