/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react"

export const LoginContext = createContext();

export const LoginProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const [viewError, setViewError] = useState(null);

    useEffect(()=>{
        const storageUser = localStorage.getItem('@UserName:user');

        if(storageUser){
            setUser(storageUser.replace(/['"]/g, ''));
        }
    }, []);

    function handleLogin (username, password, event){
        event.preventDefault();
        try{
            if(username === 'caiorj95@gmail.com' && password === '12345'){
                setUser('Caio Cesar');
                localStorage.setItem('@UserName:user', JSON.stringify('Caio'));
                setViewError(null)
                return true
            }
            else{
                setViewError('Senha Incorreta');
                throw new Error('Senha Incorreta');
            }
        }catch(err){
            return err.message;
        }
    }
    function logout(){
        setUser(null);
        localStorage.removeItem('@UserName:user');
        
    }

    const value = {
        user,
        viewError,
        setUser,
        handleLogin,
        logout
    }


    return(
        <LoginContext.Provider value={value}>
            {children}
        </LoginContext.Provider>
    )
}