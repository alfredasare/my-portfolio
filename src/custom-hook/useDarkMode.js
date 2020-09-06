import {useEffect, useState} from 'react';
import {gsap} from "gsap"
import { window } from "browser-monads";

export const useDarkMode = () => {
  const [theme, setTheme] = useState('default');
  const [mountedComponent, setMountedComponent] = useState(false);

  gsap.config({
    nullTargetWarn: false,
  });

  const setMode = mode => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === 'default' ? setMode('dark') : setMode('default')
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
    setMountedComponent(true);
  }, []);

  return [theme, themeToggler, mountedComponent];

};