'use client';

import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import { BasicLayoutProps } from '@/types';
import { Spinner } from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const HomeLayout = ({ children }: BasicLayoutProps) => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return !isMounted ? (
    <div className="flex h-[100vh] items-center justify-center">
      <Spinner
        color="danger"
        label="Loading..."
        labelColor="foreground"
        size="lg"
      />
    </div>
  ) : (
    <>
      <Navbar />
      <main className="mx-auto flex items-center justify-center mobile:max-w-[300px] mobile:pt-[7rem] tablet:pt-[10rem] desktop:max-w-[1280px]">
        {children}
      </main>
      {pathname !== '/home' && <Footer />}
    </>
  );
};

export default HomeLayout;
