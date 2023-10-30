'use client';

import { Navbar as BaseNavBar, Button } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { TOP_CITIES_LINKS } from 'src/constants';
import { NavDropDown, Text } from '../atoms';

export function NavBar() {
  return (
    <BaseNavBar className='h-18 sticky top-0 z-20 flex items-center justify-between shadow'>
      <BaseNavBar.Brand href='/'>
        <Image
          alt='Flowbite React Logo'
          className='mr-3 h-6 sm:h-9'
          width={50}
          height={50}
          src='/favicon.ico'
        />
        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
          Flowbite React
        </span>
      </BaseNavBar.Brand>
      <div className='flex items-center gap-5'>
        <div className='flex md:order-2'>
          <Button>Get started</Button>
          <BaseNavBar.Toggle />
        </div>
        <BaseNavBar.Collapse>
          <NavDropDown label='Top Cities' links={TOP_CITIES_LINKS} />
          <NavDropDown label='Help' links={TOP_CITIES_LINKS} />
        </BaseNavBar.Collapse>
        <Link href={'/auth'}>
          <Text variant='h3' className=''>
            Login
          </Text>
        </Link>
      </div>
    </BaseNavBar>
  );
}
