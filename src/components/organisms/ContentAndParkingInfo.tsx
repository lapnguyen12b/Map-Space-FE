import Image from 'next/image';
import Link from 'next/link';
import {
  ClassName,
  ParkingByCityContent,
  ParkingByCityNearby,
} from 'src/types';
import { cn } from 'src/utils';
import { Text } from '..';

type ContentAndParkingInfoProps = ClassName & {
  city: string;
  contents: ParkingByCityContent[];
  nearbys: ParkingByCityNearby[];
};

export const ContentAndParkingInfo = ({
  className,
  city,
  contents,
  nearbys,
}: ContentAndParkingInfoProps) => {
  return (
    <div className={cn(className)}>
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr]'>
        <section>
          <Text
            variant='h3'
            className='font-bold'
          >{`Related Content for ${city}siders!`}</Text>
          <br />
          <ul className='grid grid-cols-1 gap-4'>
            {contents.map((c) => (
              <li
                key={`content-parking-${c.title}`}
                className='grid grid-cols-[170px_1fr] gap-4'
              >
                <Image src={c.image} width={170} height={120} alt='' />
                <div>
                  <Link href={c.href} target='_blank'>
                    <Text variant='base' className='font-semibold underline'>
                      {c.title}
                    </Text>
                  </Link>

                  <Text className='line-clamp-3'>{c.description}</Text>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <Text variant='h3' className='font-bold'>
            Parking in Nearby Suburbs
          </Text>
          <br />
          <Text>
            Need parking elsewhere? Search for daily or monthly parking across{' '}
            {city}.
          </Text>
          <br />
          <ul className='grid grid-cols-1 gap-2'>
            {nearbys.map((n) => (
              <li key={`nearby-${n.title}`}>
                <Link href={n.href} target='_blank'>
                  <Text className='text-green-400 underline'>{n.title}</Text>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};
