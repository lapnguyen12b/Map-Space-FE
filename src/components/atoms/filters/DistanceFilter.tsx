"use client";
import React from "react";

import { Text } from "..";
import { Button } from "../Button";
import { useDetectClickOutside } from "react-detect-click-outside";

export const DistanceFilterDropdown = ({
  closeDropdown,
}: {
  closeDropdown: (e: Event) => void;
}) => {
  const ref = useDetectClickOutside({
    onTriggered: closeDropdown,
  });

  return (
    <div
      ref={ref}
      className={`absolute transition ease-linear duration-300 left-0 top-[calc(100%_+_4px)] bg-white rounded-2xl w-[300px] shadow-lg border border-zinc-500 opacity-100`}
    >
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
