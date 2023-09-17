'use client';
import Image from 'next/image';
import { IMAGES } from 'src/constants';
import { useGetCityTop } from 'src/hooks/useGetCityTop';
import { SearchBox, Text } from '..';

export const HomeBanner = () => {
  const { data: cityTopData } = useGetCityTop();

  return (
    <div className=' relative h-[63%]'>
      <div className='absolute inset-0'>
        <Image src={IMAGES.headerBgHome} fill alt='' className='object-cover' />
      </div>
      <div className='absolute inset-0 grid w-full grid-cols-[3fr_1fr] md:grid-cols-[3fr_3fr] lg:grid-cols-[3fr_4fr]'>
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

          <SearchBox />
        </div>
        <div />
      </div>
    </div>
  );
};
