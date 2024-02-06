import ThemeToggleStyled from '@/components/ThemeToggle/styles';
import React from 'react';

const ThemeToggle = ({ children }: { children: React.ReactNode }) => (
  <ThemeToggleStyled>{children}</ThemeToggleStyled>
);

export default ThemeToggle;
