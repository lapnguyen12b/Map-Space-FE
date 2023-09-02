"use client";

import { Button, Navbar } from "flowbite-react";
import Image from "next/image";
import { NavDropDown } from "../atoms";
import { TOP_CITIES_LINKS } from "src/constants";

export default function NavBar() {
  return (
    <Navbar className="h-18 sticky top-0 flex items-center justify-between shadow z-20">
      <Navbar.Brand href="/">
        <Image
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          width={50}
          height={50}
          src="/favicon.ico"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <div className="flex items-center gap-5">
        <div className="flex md:order-2">
          <Button>Get started</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="text-white">
          <NavDropDown label="Top Cities" links={TOP_CITIES_LINKS} />
          <NavDropDown label="Help" links={TOP_CITIES_LINKS} />
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
