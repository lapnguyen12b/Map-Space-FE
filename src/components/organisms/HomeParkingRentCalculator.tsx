import Image from 'next/image';
import Link from 'next/link';
import { Button, Text } from '..';

export const HomeParkingRentCalculator = () => {
  return (
    <div className='grid grid-cols-[24px_1fr_24px] bg-[#f2f4f5] py-14 lg:grid-cols-[1fr_4fr_1fr] 2xl:grid-cols-[1fr_3fr_1fr]'>
      <div className='col-span-1 col-start-2 grid grid-cols-1  gap-7 md:grid-cols-[1fr_370px]'>
        <div>
          <Text
            as='h3'
            className='font-raleway text-[26px] font-semibold text-primary-black'
          >
            Got an extra parking space? Make some cash!
          </Text>
          <Text className='font-raleway text-3xl font-semibold'>
            <Text
              as='span'
              className='font-raleway text-3xl font-semibold text-green-500'
            >
              $50,150,290
            </Text>{' '}
            Made by Parkhound hosts
          </Text>
          <br />
          <Link
            href={'#'}
            className='inline-block w-[325px] rounded-lg bg-leasebtn bg-cover bg-right bg-no-repeat py-[15px] text-center'
          >
            <Text
              className='font-raleway font-semibold tracking-wide'
              variant='base'
              as='span'
            >
              Lease my car space
            </Text>
          </Link>
          <br />
          <br />
          <Text>
            Join{' '}
            <Link
              href={'https://www.parkhound.com.au/start-earning'}
              className='inline-block '
            >
              <Text
                variant='base'
                as='span'
                className='font-semibold text-green-500 hover:underline hover:decoration-green-500'
              >
                62,124
              </Text>
            </Link>{' '}
            Aussies who have made heaps of money renting out their unused spaces
            on Parkhound. All it takes is 10 minutes, a camera, and a tape
            measure, and you’ll be on your way to truly passive income at the
            click of a button. Earn up to $5,400 per year and start earning
            today.
          </Text>
          <br />
          <Text>
            Try out our parking rent calculator to see how much your space could
            be earning.
          </Text>
          <br />
          <Link href={'https://www.parkhound.com.au/how-it-works-for-hosts'}>
            <Button className='rounded-md bg-green-400 px-5 py-2 text-white'>
              <Text
                variant='base'
                as='h3'
                className='font-raleway font-semibold'
              >
                Parking Rent Calculator
              </Text>
            </Button>
          </Link>
        </div>
        <div className='h-fit rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 p-8'>
          <Image
            src='https://www.parkhound.com.au/images/homepage/svg/icon-parkhound-logo-light.svg'
            height={77}
            width={89}
            alt=''
          />
          <br />
          <Text variant='h3' as='h3' className='font-semibold text-white'>
            Are you an EV Owner?
          </Text>
          <br />
          <Text variant='base' className=' text-white'>
            <Text as='span' className='text-base font-semibold'>
              Chargehound
            </Text>{' '}
            puts an Australia-wide network of EV chargers at your fingertips.
            Prebook a parking spot with charging included or rent out your home
            EV charger for extra income.
          </Text>
        </div>
      </div>
    </div>
  );
};
