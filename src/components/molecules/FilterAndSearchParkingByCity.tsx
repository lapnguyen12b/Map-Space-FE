import React from "react";
import { FilterWrapper, MoreFilter, SearchBox, SelectInput } from "..";
import { OPTIONS_SEARCH_BY_MONTHLY_DAILY } from "src/constants";

function FilterAndSearchParkingByCity() {
  return (
    <div className="relative">
      <div className="grid grid-cols-[auto_1fr] gap-5 auto-rows-auto relative z-10">
        <SelectInput options={OPTIONS_SEARCH_BY_MONTHLY_DAILY} />
        <SearchBox />
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center">
          <FilterWrapper variant="price" title="Price" />
          <FilterWrapper variant="type" title="Type" />
          <FilterWrapper variant="distance" title="Distance" />
        </div>

        <MoreFilter />
      </div>
    </div>
  );
}

export default FilterAndSearchParkingByCity;
