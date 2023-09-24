import React from 'react';
import { Footer, HeaderBanner, NavBar } from '..';

type LayoutProps = React.PropsWithChildren;

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header style={{ display: 'unset' }}>
        <HeaderBanner />
        <NavBar />
      </header>
      <main className='h-1 min-h-[100dvh]'>
        {/* <Notifications /> */}
        {children}
        <Footer />
      </main>
    </>
  );
};
