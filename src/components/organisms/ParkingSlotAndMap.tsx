import React from "react";
import {
  FilterAndSearchParkingByCity,
  Map,
  NotifyCard,
  ParkingSlotCard,
} from "../molecules";

export const ParkingSlotAndMap = () => {
  return (
    <div className="grid h-full grid-cols-1 2xl:grid-cols-[2fr_5fr]">
      <div className=" h-full overflow-y-auto  bg-[#f2f4f5] p-3">
        <div className="flex flex-col gap-8">
          <FilterAndSearchParkingByCity />
          {Array(1)
            .fill(1)
            .map((_, index) => (
              <ParkingSlotCard key={index} />
            ))}

          <NotifyCard city="test" />
        </div>
      </div>
      <div>{/* <Map /> */}</div>
    </div>
  );
};
