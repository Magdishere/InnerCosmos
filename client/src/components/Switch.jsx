import React, { useState, useEffect }from 'react';
import useStore from '../store/index';

const ThemeSwitch = () =>{
    const { theme, setTheme } = useStore();
    const [isDarkMode, setIsDarkMode] = useState(theme === 'dark');

    const toggleTheme = () =>{
        const newTheme = isDarkMode ? 'light' : 'dark';
        setIsDarkMode(!isDarkMode);
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <div 
        className={`switch ${isDarkMode ? "light" : "dark"}`}
        onClick={toggleTheme}
        >
            <div className={`ball ${isDarkMode}`}></div>
        </div>
    );
}

export default ThemeSwitch;