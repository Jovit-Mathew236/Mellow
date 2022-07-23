import React, { createContext, useState } from 'react'
// import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/compat/auth';


export const FirebaseContext = createContext(null)
export const AuthContext = createContext(null);


export default function Context({ children }) {
    const [user, setUser] = useState('null')
    const [userId, setUserId] = useState('')
    const [userStatus, setUserStatus] = useState('null')
    return (

        <AuthContext.Provider value={{ user, setUser ,userStatus,setUserStatus,userId,setUserId}}>
            {children}
        </AuthContext.Provider>
    )
}

