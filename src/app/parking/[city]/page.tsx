import React from "react";
import {
  Breadcrumb,
  CommonQuestions,
  ContentAndParkingInfo,
  Footer,
  Intro,
  LayoutPage,
  ParkingSlotAndMap,
  RentingParkingPlace,
} from "src/components";
import { BREADCRUMB_PAGE_BY_CITY } from "src/constants";
import {
  PARKING_BY_CITY_CONTENT,
  PARKING_BY_CITY_NEARBY,
} from "src/constants/fakeData";

function ParkingByCity({ params }: { params: { city: string } }) {
  const { city } = params;

  return (
    <div className="h-[calc(100%_-_62px_-_32px)]">
      <ParkingSlotAndMap />

      <LayoutPage className="pt-3">
        <Breadcrumb
          breadcrumbs={BREADCRUMB_PAGE_BY_CITY}
          className="col-start-2 col-span-1 bg-slate-500/10 px-2 py-1"
        />
        <Intro className="col-start-2 col-span-1" />
        <CommonQuestions className="col-start-2 col-span-1 mt-10" city={city} />

        <RentingParkingPlace className="col-start-2 col-span-1 mt-10" />
        <ContentAndParkingInfo
          className="col-start-2 col-span-1 mt-10"
          city={city}
          contents={PARKING_BY_CITY_CONTENT}
          nearbys={PARKING_BY_CITY_NEARBY}
        />

        <Footer className="col-start-2 col-span-1 mt-10 bg-white" />
      </LayoutPage>
    </div>
  );
}

export default ParkingByCity;
