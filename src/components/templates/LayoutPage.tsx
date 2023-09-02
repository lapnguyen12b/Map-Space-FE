import React from "react";
import { cn } from "src/utils";
type LayoutProps = React.PropsWithChildren & {
  className?: string;
};

export const LayoutPage = ({ children, className }: LayoutProps) => {
  const classNameMerge = cn(
    "grid grid-cols-[24px_1fr_24px] 2xl:grid-cols-[1fr_3fr_1fr] bg-[#f2f4f5]",
    className
  );
  return <div className={classNameMerge}>{children}</div>;
};
