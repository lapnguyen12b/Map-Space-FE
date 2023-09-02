"use client";

import { Button, CustomFlowbiteTheme, Navbar } from "flowbite-react";
import Image from "next/image";
import { NavDropDown } from "../atoms";
import { TOP_CITIES_LINKS } from "src/constants";

const customTheme: CustomFlowbiteTheme["navbar"] = {
  root: {
    base: "bg-white px-2 py-2.5 text-gray-800 sm:px-4",
    rounded: {
      on: "rounded",
      off: "",
    },
    bordered: {
      on: "",
      off: "",
    },
    inner: {
      base: "mx-auto flex flex-wrap items-center justify-between",
      fluid: {
        on: "",
        off: "container",
      },
    },
  },

  brand: {
    base: "flex items-center",
  },
  collapse: {
    base: "w-full md:block md:w-auto",
    list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
    hidden: {
      on: "hidden",
      off: "",
    },
  },
  link: {
    base: "block py-2 pr-4 pl-3 md:p-0",
    active: {
      on: "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700",
      off: "border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white",
    },
    disabled: {
      on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
      off: "",
    },
  },
  toggle: {
    base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
    icon: "h-6 w-6 shrink-0",
  },
};

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
        <Navbar.Collapse>
          <NavDropDown label="Top Cities" links={TOP_CITIES_LINKS} />
          <NavDropDown label="Help" links={TOP_CITIES_LINKS} />
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
