'use client';

import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import { Spinner } from '@nextui-org/react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const HomeLayout = ({ children }: any) => {
  const pathname = usePathname();
  const { push } = useRouter();
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
      <main className="mx-auto flex max-w-[1280px] items-center justify-center pt-[12rem]">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default HomeLayout;
