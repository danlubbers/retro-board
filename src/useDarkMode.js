import { useState, useEffect} from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = mode => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode)
  };

  const toggleTheme = () => {
    if (theme === 'light') setMode('dark');
    else setMode('light');
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');

    console.log(window.matchMedia('(prefers-colors-scheme: dark)'))
    window.matchMedia && window.matchMedia('(prefers-colors-scheme: dark)').matches && !localTheme ? setMode('dark') : localTheme ? setTheme(localTheme)  : setMode('light');

    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted]
};