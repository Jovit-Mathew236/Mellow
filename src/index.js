import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Context, { FirebaseContext } from './store/Contexts';
import firebase from './firebase/config'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FirebaseContext.Provider value={{ firebase }}>
    {/* <React.StrictMode> */}
      <Context>
        <App />
      </Context>
    {/* </React.StrictMode> */}
  </FirebaseContext.Provider>
);
