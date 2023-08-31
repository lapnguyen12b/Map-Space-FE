import React from "react";
import { SearchBox, SelectInput } from "..";
import { OPTIONS_SEARCH_BY_MONTHLY_DAILY } from "src/constants";

function FilterAndSearchParkingByCity() {
  return (
    <div className="">
      <div className="grid grid-cols-[auto_1fr] gap-5 auto-rows-auto">
        <SelectInput options={OPTIONS_SEARCH_BY_MONTHLY_DAILY} />
        <SearchBox />
      </div>
    </div>
  );
}

export default FilterAndSearchParkingByCity;
