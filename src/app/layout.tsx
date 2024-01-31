import { nunito } from '@/config/fonts';
import theme from '@/config/theme/theme-config';
import AntdRegistry from '@/lib/AntdRegistry';
import StyledComponentsRegistry from '@/lib/StyledComponentRegistry';
import '@/styles/global.css';
import '@/styles/reset.css';
import { ConfigProvider } from 'antd';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ThienPA ⚡︎ Corner',
  description: 'A simple page is made by a developer love his job.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={nunito.className} lang="en">
      <head>
        <link href="/images/thienpa-dev-icon.png" rel="icon" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <AntdRegistry>
            <ConfigProvider theme={theme}>{children}</ConfigProvider>
          </AntdRegistry>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
