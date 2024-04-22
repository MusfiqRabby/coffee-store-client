import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import App from "../firebase/firebase.config";

const auth = getAuth(App);

export const AuthContext = createContext(null)

const AuthProviders = ({children}) => {
   
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }

   const userInfo = {
    users, loading, createUser
   }
   
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;