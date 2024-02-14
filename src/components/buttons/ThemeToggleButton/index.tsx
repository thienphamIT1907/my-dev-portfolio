'use client';

import ThemeToggleButtonStyled from '@/components/buttons/ThemeToggleButton/styles';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleSwitchTheme = () => {
    setIsDarkMode(!isDarkMode);
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeToggleButtonStyled
      className="flex items-center justify-center"
      onClick={handleSwitchTheme}
    >
      {isDarkMode ? <RiMoonFill /> : <RiSunFill />}
    </ThemeToggleButtonStyled>
  );
};

export default ThemeToggleButton;
