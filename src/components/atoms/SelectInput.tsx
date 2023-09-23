"use client";
import React, { useRef, useState } from "react";
import { Option } from "src/types";
import { Text } from ".";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useOnClickOutside } from "src/hooks";

type SelectInputProps = {
  options: Option[];
};

function SelectInput(props: SelectInputProps) {
  const { options } = props;
  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);
  const [showOptions, setShowOptions] = useState(false);
  const ref = useRef(null);
  const handleClickOutside = () => {
    setShowOptions(false);
  };
  useOnClickOutside(ref, handleClickOutside);

  return (
    <div
      ref={ref}
      className="relative bg-zinc-800 min-w-[120px] rounded-lg text-white cursor-pointer select-none"
    >
      <div
        className="flex items-center justify-between h-full px-3"
        onClick={() => setShowOptions(!showOptions)}
      >
        <Text className="truncate">{selectedOption.label}</Text>
        <ChevronDownIcon className="h-4 w-4" />
      </div>
      <ul
        className={`absolute top-[calc(100%_+_4px)] bg-zinc-800 w-full transition ease-linear duration-300 rounded  ${
          showOptions ? "opacity-100" : "opacity-0"
        }`}
      >
        {options.map((option) => (
          <li
            key={`select-${option.value}`}
            className={`${
              showOptions ? " opacity-100" : "opacity-0 hidden"
            } flex items-center border-b px-2 last:border-none select-none h-10`}
            onClick={() => {
              setSelectedOption(option);
              setShowOptions(false);
            }}
          >
            <Text>{option.label}</Text>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SelectInput;
