import Image from 'next/image';
import Link from 'next/link';
import { ITopCityResponse } from 'src/types/Cities';
import { cn } from 'src/utils';
import { Text } from '..';

type CardTopCityProps = {
  city: ITopCityResponse;
  classNameWrapper?: string;
  classNameText?: string;
};

export const CardTopCity = (props: CardTopCityProps) => {
  const { city, classNameWrapper } = props;
  const classNameWrapperMerge = cn(
    `rounded bg-slate-700 h-[165px] overflow-hidden relative grid place-items-center group`,
    classNameWrapper
  );

  return (
    <Link href={`/parking/${city.url}`} className={classNameWrapperMerge}>
      <Image
        src={city.imageUrl}
        width={270}
        height={165}
        alt=''
        className='absolute inset-0 object-cover'
      />
      <div className='absolute inset-0 z-[5] bg-green-400/20 transition-all duration-150 ease-out group-hover:bg-green-500/50' />
      <Text
        variant='h2'
        className='absolute z-10 text-center font-semibold capitalize text-white shadow-red-500 text-shadow'
      >
        {city.cityName}
      </Text>
    </Link>
  );
};
