import {
  Breadcrumb,
  CommonQuestions,
  ContentAndParkingInfo,
  Intro,
  LayoutPage,
  ParkingSlotAndMap,
  RentingParkingPlace,
} from 'src/components';
import { BREADCRUMB_PAGE_BY_CITY } from 'src/constants';
import {
  PARKING_BY_CITY_CONTENT,
  PARKING_BY_CITY_NEARBY,
} from 'src/constants/fakeData';

function ParkingByCity({ params }: { params: { city: string } }) {
  const { city } = params;

  return (
    <div className='h-[calc(100%_-_62px_-_32px)]'>
      <ParkingSlotAndMap />

      <LayoutPage className='pt-3'>
        <Breadcrumb
          breadcrumbs={BREADCRUMB_PAGE_BY_CITY}
          className='col-span-1 col-start-2 bg-slate-500/10 px-2 py-1'
        />
        <Intro className='col-span-1 col-start-2' />
        <CommonQuestions className='col-span-1 col-start-2 mt-10' city={city} />

        <RentingParkingPlace className='col-span-1 col-start-2 mt-10' />
        <ContentAndParkingInfo
          className='col-span-1 col-start-2 mt-10'
          city={city}
          contents={PARKING_BY_CITY_CONTENT}
          nearbys={PARKING_BY_CITY_NEARBY}
        />
      </LayoutPage>
    </div>
  );
}

export default ParkingByCity;
