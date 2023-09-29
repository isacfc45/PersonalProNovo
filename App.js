import React from 'react';
import { createContext, useState } from 'react';
import Routes from './app/routes/Routes';
import AuthService from './app/services/AuthService';

export const AuthContext = createContext({})

export const AlunoContext = createContext({})

export const TreinoContext = createContext({})

export const TreinoEspeficificoContext = createContext({})


export default function App() {
    const [user, setUser] = useState(null)
    const [aluno, setAluno] = useState(null)
    const [treino, setTreino] = useState(null)
    const [treinoEspecifico, setTreinoEspecifico] = useState(null)

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
            <AlunoContext.Provider value={{aluno, setAluno}}>
                <TreinoContext.Provider value={{treino, setTreino}}>
                    <TreinoEspeficificoContext.Provider value={{treinoEspecifico, setTreinoEspecifico}}>
                        <Routes />
                    </TreinoEspeficificoContext.Provider>
                </TreinoContext.Provider>
            </AlunoContext.Provider>
        </AuthContext.Provider>
    );
}