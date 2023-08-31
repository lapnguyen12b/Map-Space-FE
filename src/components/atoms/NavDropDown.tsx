"use client";
import React from "react";
import { Dropdown } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import Link from "next/link";
import { NavLink } from "src/types/Navbar";

const customTheme: CustomFlowbiteTheme["dropdown"] = {
  floating: {
    target:
      "group flex h-min items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white border border-transparent dark:bg-cyan-600 dark:enabled:hover:bg-cyan-700 dark:focus:ring-cyan-800 rounded-lg focus:ring-0 bg-transparent enabled:hover:bg-transparent ",
  },
};

type NavDropDownProps = {
  label: React.ReactNode | string;
  links: NavLink[];
  showArrowIcon?: boolean;
  isInline?: boolean;
};

export const NavDropDown = (props: NavDropDownProps) => {
  const { label, links, showArrowIcon = true, isInline = true } = props;

  return (
    <Dropdown
      inline={isInline}
      label={label}
      arrowIcon={showArrowIcon}
      theme={customTheme}
    >
      {links.map((link) => (
        <Dropdown.Item key={`nav-link-${link.name}`} as={Link} href={link.href}>
          {link.name}
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
};
