import React from "react";
import {
  FilterAndSearchParkingByCity,
  Map,
  NotifyCard,
  PaginationFooter,
  ParkingSlotCard,
} from "../molecules";

export const ParkingSlotAndMap = () => {
  return (
    <div className="grid h-full grid-cols-1 2xl:grid-cols-[2fr_5fr]">
      <section className=" h-full overflow-y-auto grid grid-rows-[1fr_auto] grid-cols-[12px_1fr_12px] bg-[#f2f4f5]">
        <div className="col-start-2 col-span-1 mt-3">
          <FilterAndSearchParkingByCity />
          <div className="flex flex-col gap-8 mt-2">
            {Array(11)
              .fill(1)
              .map((_, index) => (
                <ParkingSlotCard key={index} />
              ))}

            <NotifyCard city="test" />
          </div>
        </div>
        <div className="col-start-1 col-end-4 mt-3">
          <PaginationFooter />
        </div>
      </section>
      <section>{/* <Map /> */}</section>
    </div>
  );
};
