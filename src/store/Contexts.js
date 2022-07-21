import React, { createContext, useState } from 'react'
// import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/compat/auth';


export const FirebaseContext = createContext(null)
export const AuthContext = createContext(null);


export default function Context({ children }) {
    const [user, setUser] = useState('null')
    const [userStatus, setUserStatus] = useState('null')
    return (

        <AuthContext.Provider value={{ user, setUser ,userStatus,setUserStatus}}>
            {children}
        </AuthContext.Provider>
    )
}

