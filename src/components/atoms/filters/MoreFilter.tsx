import React from "react";
import { cn } from "src/utils";
import { classNameDefault } from "./FilterWrapper";
import { Text } from "..";

type MoreFilterProps = {
  showMoreFilters: boolean;
  handleClick: () => void;
};

export const MoreFilter = ({
  handleClick,
  showMoreFilters,
}: MoreFilterProps) => {
  const classNameMerge = cn(classNameDefault, {
    "border-zinc-500": showMoreFilters,
  });
  return (
    <button className={classNameMerge} onClick={handleClick}>
      <Text>More Filters</Text>
    </button>
  );
};
