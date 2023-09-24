import { Text } from '..';

export const HomeBanner = () => {
  return (
    <div className='relative h-auto bg-banner bg-cover bg-center'>
      <div className='grid w-full grid-cols-[3fr_1fr] md:grid-cols-[3fr_3fr] lg:grid-cols-[3fr_4fr]'>
        <div className='px-8 py-[80px]'>
          <Text
            as='h1'
            className='font-raleway text-4xl font-semibold leading-[60px] text-primary-black 2xl:text-[50px]'
          >
            Find Closer, Cheaper Parking Anywhere in Australia
          </Text>
          <Text className='mb-[30px] mt-[15px] w-[80%] font-raleway text-base font-medium text-primary-blacker 2xl:text-xl'>
            Parkhound makes it easy to browse, book & pay for the best parking
            space possible — no matter where you are.
          </Text>

          {/* <SearchBar /> */}
        </div>
        <div />
      </div>
    </div>
  );
};
