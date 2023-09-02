import React from "react";
import NavBar from "../organisms/Navbar";
import Head from "next/head";
import { HeaderBanner } from "../atoms/HeaderBanner";

type LayoutProps = React.PropsWithChildren;

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="h-screen min-h-screen">
      <HeaderBanner />
      <NavBar />
      {children}
    </main>
  );
};
