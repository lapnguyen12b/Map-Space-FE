import React from 'react';
import { HeaderBanner } from '../atoms/HeaderBanner';
import NavBar from '../organisms/Navbar';

type LayoutProps = React.PropsWithChildren;

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main className='h-full min-h-[100dvh]'>
      <HeaderBanner />
      <NavBar />
      {children}
    </main>
  );
};
