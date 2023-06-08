import { createContext, useEffect, useState } from "react";
import React from 'react';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const google = new GoogleAuthProvider();

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, google)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return unsubscribe;
    })

    const authInfo = {
        user,
        signIn,
        loading,
        googleLogin,

    }
    return (
       <AuthContext.Provider value={authInfo}>
        { children }
       </AuthContext.Provider>
    );
};

export default AuthProvider;