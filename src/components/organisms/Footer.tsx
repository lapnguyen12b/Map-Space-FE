import React from "react";
import { ClassName } from "src/types";
import { cn } from "src/utils";
import {
  FooterCopyright,
  FooterNavigation,
  FooterSecTrace,
  FooterSpacer,
} from "..";

type FooterProps = ClassName;

export const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn(className)}>
      <FooterNavigation />
      <FooterSecTrace />
      <FooterSpacer />
      <FooterCopyright />
    </footer>
  );
};
