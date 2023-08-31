import React from "react";

function ParkingByCity({ params }: { params: { city: string } }) {
  return <div>ParkingByCity: {params.city}</div>;
}

export default ParkingByCity;
