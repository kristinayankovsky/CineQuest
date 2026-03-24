<<<<<<< HEAD
import { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../config/firebase';

const useAuthToken = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return {
        user,
        token: user ? user.uid : null, // or use getIdToken for JWT
        logout,
        loading
    };
};

export default useAuthToken;
=======
import { useState } from "react";

export default function useAuthToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    return tokenString ? JSON.parse(tokenString) : null;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token,
  };
}
>>>>>>> ba3d6cbb662e784921aab23a8ffbdde14452df40
