import React from 'react';
import { createContext, useState } from 'react';
import Routes from './app/routes/Routes';
import AuthService from './app/services/AuthService';

export const AuthContext = createContext({})

export default function App() {
    const [user, setUser] = useState(null)
    const auth = async (email, senha) => {
        const user = await AuthService.auth(email, senha)
        setUser(user.user)
    }

    const logout = async()=>{
        await AuthService.logout();
        setUser(null)
    }
    return(
        <AuthContext.Provider value={{user: user, auth: auth, logout: logout}}>
            <Routes />
        </AuthContext.Provider>
    );
}