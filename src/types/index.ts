import { ReactNode } from 'react';

export interface Route {
  path: string;
  title: string;
}

export interface BasicLayoutProps {
  children: ReactNode;
}
