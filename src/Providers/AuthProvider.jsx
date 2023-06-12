import { createContext, useEffect, useState } from "react";
// import React from 'react';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

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

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, google)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }
    const updateUserProfile = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
            if (currentUser && currentUser.email) {
                const user = { email: currentUser.email }
                fetch('https://language-mastery-server-chi.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('access_token', data.token);
                    })
            }
            else {
                localStorage.removeItem('access_token')
            }
        })
        return unsubscribe;
    })

    const authInfo = {
        user,
        signIn,
        loading,
        createUser,
        updateUserProfile,
        googleLogin,
        logOut,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;