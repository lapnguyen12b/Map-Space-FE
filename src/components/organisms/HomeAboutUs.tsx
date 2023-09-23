import Image from 'next/image';
import React from 'react';
import { Text } from '..';

const ICONS = [
  {
    id: 1,
    url: 'https://www.parkhound.com.au/images/homepage/logo-10-news.png.pagespeed.ce.hLmYTZL22i.png',
  },
  {
    id: 2,
    url: '	https://www.parkhound.com.au/images/homepage/logo-7-news.png.pagespeed.ce.DuvPkCrP_R.png',
  },
  {
    id: 3,
    url: 'https://www.parkhound.com.au/images/homepage/logo-sunrise.png.pagespeed.ce.HrVtdTTPQA.png',
  },
  {
    id: 4,
    url: 'https://www.parkhound.com.au/images/homepage/logo-abc.png.pagespeed.ce.74j0FrU9tq.png',
  },
  {
    id: 5,
    url: 'https://www.parkhound.com.au/images/homepage/logo-afr.png.pagespeed.ce.ZJlytMRmkS.png',
  },
  {
    id: 6,
    url: 'https://www.parkhound.com.au/images/homepage/logo-time-out.png.pagespeed.ce.ZYmI_O5FWb.png',
  },
  {
    id: 7,
    url: 'https://www.parkhound.com.au/images/homepage/logo-the-daily-telegraph.png.pagespeed.ce.TdKfltu0EK.png',
  },
  {
    id: 8,
    url: 'https://www.parkhound.com.au/images/homepage/logo-herald-sun.png.pagespeed.ce.ZUSFRulotX.png',
  },
];

export const HomeAboutUs = () => {
  return (
    <div className='grid grid-cols-[24px_1fr_24px] py-14 lg:grid-cols-[1fr_4fr_1fr] 2xl:grid-cols-[1fr_3fr_1fr]'>
      <div className='col-span-1 col-start-2'>
        <div className='grid grid-cols-[auto_1fr] gap-8'>
          <Image
            src={
              'https://www.parkhound.com.au/images/homepage/icon-parkhound.svg'
            }
            height={170}
            width={170}
            alt=''
          />
          <div>
            <Text
              as='h3'
              className='font-raleway text-[26px] font-semibold text-green-600'
            >
              About Us
            </Text>
            <br />
            <Text className='font-raleway text-lg font-semibold text-primary-blacker'>
              Parkhound is the #1 Parking Marketplace in Australia. We connect
              over 200,000 Drivers looking for car parking with Hosts that have
              spare parking spaces in convenient locations across Australia.
            </Text>
            <br />
            <Text>
              Whether you&apos;re looking for a car parking space in Sydney,
              Melbourne, Brisbane, Canberra, Adelaide, Perth or near me,
              searching on Parkhound will find you the perfect spot that’s
              convenient for your morning commute.
            </Text>
            <br />
            <Text>
              If you have a spare space that you’re not using, Parkhound can
              deliver Drivers to your door willing to pay for the convenience of
              your unused parking space. Putting extra money in your pocket and
              stopping that space from going to waste. It’s a win-win.
            </Text>
          </div>
        </div>

        <div className='mt-10 flex h-10 flex-wrap items-center justify-center'>
          {ICONS.map((icon) => (
            <React.Fragment key={`icon-about-us-${icon.id}`}>
              <Image
                src={icon.url}
                width={140}
                height={30}
                alt=''
                className='my-2 block h-1/2 w-auto object-cover first:h-[60%]'
              />
              <div className='mx-2 h-full w-[1px] bg-gray-400 last:hidden' />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
