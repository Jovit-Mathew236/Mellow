import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useEffect, useContext } from 'react';
import { AuthContext, FirebaseContext } from './store/Contexts'

import Login from './components/Login';
import Onboarding from './components/Onboarding';
import Home from './components/Home';
import Signup from './components/Signup';
import Artistreg from './components/Artistreg';
import Admin from './components/Admin';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import UserProfileView from './components/UserProfileView';

function App() {
  const { firebase } = useContext(FirebaseContext)
  const { setUser,user } = useContext(AuthContext) //remove ,setUserId
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
      console.log(user.email);
      // setUserId(user ? `'${user.uid}'` : null)
    })
  })

  return (
    <div>
      <p className='logo-img'> </p>

      <BrowserRouter basename='/'>
        {/* <div>
        <img src="./images/logomellow.png" alt="" style="position: absolute;width: 186px;height: 98px;left: 141px;top: 8px;" />
      </div> */}
        <Routes>
          <Route path='/login' element={<div><Login /></div>} />
          <Route path='/onboarding' element={<div><Onboarding /></div>} />
          <Route exact path='/' element={<div><Home /> </div>} />
          <Route path='/signup' element={<div><Signup /> </div>} />
          <Route path='/artistregistration' element={<div><Artistreg /> </div>} />
          <Route path='/admin' element={user.email === 'admin@gmail.com' ? <div><Admin /> </div>: <div className='alert-h1'><h1>You don't have permission to acces this directory</h1></div>} />
          <Route path='/profile' element={<div><Profile /> </div>} />
          <Route path='/editprofile' element={<div><EditProfile /> </div>} />
          <Route path='/userprofileview' element={<div><UserProfileView /> </div>} />
        </Routes>
      </BrowserRouter></div>
  );
}

export default App;