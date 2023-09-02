"use client";

import React from "react";
import { Text } from "..";
import { Button } from "../Button";
import { Checkbox, Label } from "flowbite-react";
import { cn } from "src/utils";
import { useDetectClickOutside } from "react-detect-click-outside";
import { FilterDropdown } from "src/types";

const CheckBoxRow = () => {
  return (
    <div className="flex items-center gap-2">
      <Checkbox defaultChecked id="accept" />
      <Label className="flex" htmlFor="agree">
        <p>I agree with the</p>
      </Label>
    </div>
  );
};

const TypeFilterDropdown = (props: FilterDropdown) => {
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
        <Text>Show these space types only</Text>
        <div className="flex items-center justify-between">
          <CheckBoxRow />
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

export default React.memo(TypeFilterDropdown);
