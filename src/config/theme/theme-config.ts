import type { ThemeConfig } from 'antd';
import { Nunito } from 'next/font/google';

const globalFont = Nunito({
  weight: ['400', '500', '600', '800'],
  subsets: ['latin'],
  display: 'swap',
});

const theme: ThemeConfig = {};

export default theme;
