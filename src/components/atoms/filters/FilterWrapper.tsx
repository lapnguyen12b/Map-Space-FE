"use client";

import React, { useState } from "react";
import { cn } from "src/utils";
import { Text } from "..";
import { PriceFilterDropdown } from "./PriceFilter";
import { TypeFilterDropdown } from "./TypeFilter";
import { DistanceFilterDropdown } from "./DistanceFilter";

type FilterWrapperProps = {
  title: string;
  variant: "price" | "type" | "distance";
  className?: string;
};

export const FilterWrapper = (props: FilterWrapperProps) => {
  const { title, className, variant } = props;
  const [displayDropdown, setDisplayDropdown] = useState(false);

  const closeDropdown = () => {
    setDisplayDropdown(false);
  };
  const classNameDefault =
    "relative border bg-white px-4 py-1 rounded-full border-zinc-500 cursor-pointer select-none";
  const classNameMerge = cn(classNameDefault, className);
  return (
    <>
      <div
        className={classNameMerge}
        onClick={() => setDisplayDropdown((prev) => !prev)}
      >
        <Text>{title}</Text>
      </div>
      {variant === "price" && displayDropdown && (
        <PriceFilterDropdown closeDropdown={closeDropdown} />
      )}
      {variant === "type" && displayDropdown && (
        <TypeFilterDropdown closeDropdown={closeDropdown} />
      )}
      {variant === "distance" && displayDropdown && (
        <DistanceFilterDropdown closeDropdown={closeDropdown} />
      )}
    </>
  );
};
