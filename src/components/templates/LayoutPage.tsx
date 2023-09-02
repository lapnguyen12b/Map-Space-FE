import React from "react";
import { cn } from "src/utils";
type LayoutProps = React.PropsWithChildren & {
  className?: string;
};

export const LayoutPage = ({ children, className }: LayoutProps) => {
  const classNameMerge = cn("grid grid-cols-[48px_1fr_48px]", className);
  return <div className={classNameMerge}>{children}</div>;
};
