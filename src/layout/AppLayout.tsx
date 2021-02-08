import { ReactNode } from 'react';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
