'use client';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import { Footer, Notifications } from '..';
import { HeaderBanner } from '../atoms/HeaderBanner';
import NavBar from '../organisms/Navbar';

type LayoutProps = React.PropsWithChildren;

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header style={{ display: 'unset' }}>
        <HeaderBanner />
        <NavBar />
      </header>
      <main className='h-1 min-h-[100dvh]'>
        <Notifications />
        {children}
        <Footer />
      </main>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
};
