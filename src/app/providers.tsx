'use client';

import { BasicLayoutProps } from '@/types';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes';

export function UIProviders({ children }: BasicLayoutProps) {
  return (
    <NextUIProvider>
      <ThemeProvider attribute="class" defaultTheme="light">
        {children}
      </ThemeProvider>
    </NextUIProvider>
  );
}
