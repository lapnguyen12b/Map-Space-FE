"use client";

import React, { useState } from "react";
import { cn } from "src/utils";
import { Text } from "..";
import { PriceFilterDropdown } from "./PriceFilter";
import { TypeFilterDropdown } from "./TypeFilter";
import { DistanceFilterDropdown } from "./DistanceFilter";

const CLASS_NAME_DROPDOWN = `absolute transition ease-linear duration-300 left-0 top-[calc(100%_+_4px)] bg-white rounded-2xl w-[300px] shadow-lg border border-zinc-500`;

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
    "border bg-white px-4 py-1 rounded-full border-zinc-200 cursor-pointer select-none";
  const classNameMerge = cn(classNameDefault, className, {
    "border-zinc-500": displayDropdown,
  });
  return (
    <div className="relative">
      <div
        className={classNameMerge}
        onClick={() => setDisplayDropdown((prev) => !prev)}
      >
        <Text>{title}</Text>
      </div>
      {variant === "price" && (
        <PriceFilterDropdown
          className={CLASS_NAME_DROPDOWN}
          displayDropdown={displayDropdown}
          closeDropdown={closeDropdown}
        />
      )}
      {variant === "type" && (
        <TypeFilterDropdown
          className={CLASS_NAME_DROPDOWN}
          displayDropdown={displayDropdown}
          closeDropdown={closeDropdown}
        />
      )}
      {variant === "distance" && (
        <DistanceFilterDropdown
          className={CLASS_NAME_DROPDOWN}
          displayDropdown={displayDropdown}
          closeDropdown={closeDropdown}
        />
      )}
    </div>
  );
};
