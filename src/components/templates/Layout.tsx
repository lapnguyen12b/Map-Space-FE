import React from 'react';
import { Footer, Notifications } from '..';
import { HeaderBanner } from '../atoms/HeaderBanner';
import NavBar from '../organisms/Navbar';

type LayoutProps = React.PropsWithChildren;

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header>
        <HeaderBanner />
        <NavBar />
      </header>
      <main className='h-full min-h-[100dvh]'>
        <Notifications />
        {children}
      </main>
      <Footer />
    </>
  );
};
