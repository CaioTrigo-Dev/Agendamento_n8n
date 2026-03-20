/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState('light');

    const handleTheme = () => theme === 'light' ? setTheme('dark') : setTheme('light');

    const value = {
        handleTheme,
        theme
    }
    return(
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )

}