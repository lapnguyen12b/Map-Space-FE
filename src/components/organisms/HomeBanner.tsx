import Image from 'next/image';
import { IMAGES } from 'src/constants';
import { SearchBox, Text } from '..';

export const HomeBanner = () => {
  return (
    <div className='relative h-[63%]'>
      <div className='absolute inset-0'>
        <Image src={IMAGES.headerBgHome} fill alt='' className='object-cover' />
      </div>
      <div className='absolute inset-0 grid w-full grid-cols-[3fr_1fr]'>
        <div className='px-8 py-[80px]'>
          <Text
            as='h1'
            className='font-raleway text-[50px] font-semibold leading-[60px] text-primary-black'
          >
            Find Closer, Cheaper Parking Anywhere in Australia
          </Text>
          <Text className='mb-[30px] mt-[15px] w-[80%] font-raleway text-xl font-medium text-primary-blacker'>
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
