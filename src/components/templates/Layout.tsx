import React from "react";
import NavBar from "../organisms/Navbar";
import Head from "next/head";

type LayoutProps = React.PropsWithChildren;

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="h-screen min-h-screen">
      <NavBar />
      {children}
    </main>
  );
};
