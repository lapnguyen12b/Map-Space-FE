"use client";
import React from "react";

import { Text } from "..";
import { Button } from "../Button";
import { useDetectClickOutside } from "react-detect-click-outside";
import { FilterDropdown } from "src/types";
import { cn } from "src/utils";

export const DistanceFilterDropdown = (props: FilterDropdown) => {
  const { closeDropdown, displayDropdown, className } = props;
  const ref = useDetectClickOutside({
    onTriggered: closeDropdown,
  });

  const classNameMerge = cn(
    className,
    {
      "opacity-100 visible": displayDropdown,
    },
    {
      "opacity-0 invisible": !displayDropdown,
    }
  );

  return (
    <div ref={ref} className={classNameMerge}>
      <div className="p-3 flex flex-col gap-3">
        <Text>Show listings priced between</Text>
        <div className="flex items-center justify-between">
          <div>
            <Text>Min Price</Text>
            <input
              type="text"
              className="border border-zinc-500 w-[70px] rounded"
            />
          </div>
          <div>
            <Text>Max Price</Text>
            <input
              type="text"
              className="border border-zinc-500 w-[70px] rounded"
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="p-3 flex items-center justify-between">
        <Text className="underline text-gray-500">Reset</Text>

        <Button className="bg-green-500 text-white px-3 py-1 rounded">
          <Text variant="h5" className="font-semibold">
            Save
          </Text>
        </Button>
      </div>
    </div>
  );
};
