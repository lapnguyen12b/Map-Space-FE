import Link from 'next/link';
import { cn } from 'src/utils';
import { Text } from '..';

type CardTopCityProps = {
  cityName: string;
  url: string;
  classNameWrapper?: string;
  classNameText?: string;
};

export const CardTopCity = (props: CardTopCityProps) => {
  const { cityName, url, classNameWrapper } = props;

  const classNameWrapperMerge = cn('rounded', classNameWrapper);

  return (
    <Link href={url} className={classNameWrapperMerge}>
      <Text className='text-center font-semibold text-white'>{cityName}</Text>
    </Link>
  );
};
