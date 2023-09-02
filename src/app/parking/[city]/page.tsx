import React from "react";
import { ParkingSlotAndMap } from "src/components";

function ParkingByCity({ params }: { params: { city: string } }) {
  return (
    <div className="h-[calc(100%_-_62px_-_32px)]">
      <ParkingSlotAndMap />
    </div>
  );
}

export default ParkingByCity;
