import React from "react";
import {
  CommonQuestions,
  Intro,
  LayoutPage,
  ParkingSlotAndMap,
} from "src/components";

function ParkingByCity({ params }: { params: { city: string } }) {
  const { city } = params;

  return (
    <div className="h-[calc(100%_-_62px_-_32px)]">
      <ParkingSlotAndMap />

      <LayoutPage className="mt-3">
        <Intro className="col-start-2 col-span-1" />
        <CommonQuestions className="col-start-2 col-span-1 mt-10" />
      </LayoutPage>
    </div>
  );
}

export default ParkingByCity;
