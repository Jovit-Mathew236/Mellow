import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useEffect, useContext, useState } from 'react';
import { AuthContext, FirebaseContext } from './store/Contexts'

import { ParallaxProvider } from 'react-scroll-parallax';
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
  const { setUser } = useContext(AuthContext) //remove ,setUserId
  const [email, setemail] = useState('')
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
      setemail(user ? user.email : '')
      // console.log(user);
      // setUserId(user ? `'${user.uid}'` : null)
    })
  })
  // const useremail = user.email !== null  ? user.email : ''
  return (
    <ParallaxProvider>
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
            <Route path='/admin' element={email === 'jovitmathew236@gmail.com' ? <div><Admin /> </div> : <div className='alert-h1'><h1>You don't have permission to acces this directory</h1></div>} />
            <Route path='/profile' element={<div><Profile /> </div>} />
            <Route path='/editprofile' element={<div><EditProfile /> </div>} />
            <Route path='/userprofileview' element={<div><UserProfileView /> </div>} />
          </Routes>
        </BrowserRouter>
      </div>
    </ParallaxProvider>
  );
}

export default App;