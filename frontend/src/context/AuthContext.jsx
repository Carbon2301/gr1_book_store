import { createContext, useContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const AuthContext = createContext();
// Custom hook để các component dễ lấy dữ liệu auth
export const useAuth = () => {
    return useContext(AuthContext);
}

const googleProvider = new GoogleAuthProvider();

//authProvider
export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // register a user
    const registerUser = async (email,password) => {
        return await createUserWithEmailAndPassword(auth, email, password);
    }

    // login a user
    const loginUser = async (email,password) => {
        return await signInWithEmailAndPassword(auth, email, password);
    }

    // sign up with google
    const signInWithGoogle = async () => {
        return await signInWithPopup(auth, googleProvider);
    }

    // logout a user
    const logoutUser = async () => {
        return await signOut(auth);
    }

    //monitor auth state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);

            if (user) {
                const{email, displayName, photoURL} = user;
                const userData={
                    email,
                    username: displayName,
                    photo: photoURL,
                }
            } 
        });
        return () => unsubscribed();
    }, [])

    const value = {
        currentUser,
        loading,
        registerUser,
        loginUser,
        signInWithGoogle,
        logoutUser,
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}



