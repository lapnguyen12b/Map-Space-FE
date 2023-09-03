import {
  FilterAndSearchParkingByCity,
  NotifyCard,
  PaginationFooter,
  ParkingSlotCard,
} from '../molecules';

export const ParkingSlotAndMap = () => {
  return (
    <div className='grid h-full grid-cols-1 xl:grid-cols-[2fr_3fr] 2xl:grid-cols-[2fr_4.5fr]'>
      <section className='order-2 grid h-full grid-cols-[12px_1fr_12px] grid-rows-[1fr_auto] overflow-y-auto bg-[#f2f4f5] xl:order-none'>
        <div className='col-span-1 col-start-2 mt-3'>
          <FilterAndSearchParkingByCity />
          <div className='mt-2 flex flex-col gap-8'>
            {Array(11)
              .fill(1)
              .map((_, index) => (
                <ParkingSlotCard key={index} />
              ))}

            <NotifyCard city='test' />
          </div>
        </div>
        <div className='col-start-1 col-end-4 mt-3'>
          <PaginationFooter />
        </div>
      </section>
      <section className='order-1 xl:order-none'>{/* <Map /> */}</section>
    </div>
  );
};
