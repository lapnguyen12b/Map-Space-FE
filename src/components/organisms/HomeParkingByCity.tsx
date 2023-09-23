import { HomeSectionSellingPoint, HomeSectionTopCities, Text } from '..';

export const HomeParkingByCity = () => {
  return (
    <div className='grid 2xl:grid-cols-[1fr_3fr_1fr]'>
      <HomeSectionSellingPoint classNameWrapper='col-start-2 col-span-1 my-[50px]' />

      {/* text description */}
      <div className='col-span-1 col-start-2'>
        <Text
          as={'h2'}
          className='text-center font-raleway text-[26px] font-bold text-primary-black'
        >
          With Parkhound, pricey car parks aren’t your only option anymore
        </Text>
        <Text className='mx-auto w-2/3 text-center font-raleway  text-[18px] font-semibold text-primary-black'>
          Monthly or daily, CBD or suburb, Parkhound has thousands of hidden-gem
          spaces at affordable rates – all 100% verified & bookable online.
        </Text>
      </div>

      <HomeSectionTopCities classNameWrapper='col-span-1 col-start-2 mt-8' />
    </div>
  );
};
