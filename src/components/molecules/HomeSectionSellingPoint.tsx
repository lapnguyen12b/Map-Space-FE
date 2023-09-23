import { cn } from 'src/utils';
import { CardSellingPoint, Text } from '..';

type HomeSectionSellingPointProps = {
  classNameWrapper?: string;
};

export const HomeSectionSellingPoint = (
  props: HomeSectionSellingPointProps
) => {
  const { classNameWrapper } = props;

  const classNameWrapperMerge = cn(
    'grid grid-cols-3 gap-[30px]',
    classNameWrapper
  );
  return (
    <div className={classNameWrapperMerge}>
      <CardSellingPoint
        title='Search'
        content={
          <Text className='text-base'>
            Search from over{' '}
            <Text
              as='span'
              className='text-base font-semibold text-primary-black'
            >
              50,000 hidden-gem, local parking spaces
            </Text>{' '}
            Australia-wide.
          </Text>
        }
        icon={'https://www.parkhound.com.au/images/svg/icon-point-search.svg'}
      />
      <CardSellingPoint
        title='Book'
        content={
          <Text className='text-base'>
            Book a cheaper, more convenient space that meets your needs.
            <Text
              as='span'
              className='text-base font-semibold text-primary-black'
            >
              Trusted by over 100,000 Aussies.
            </Text>
          </Text>
        }
        icon={'	https://www.parkhound.com.au/images/svg/icon-point-book.svg'}
      />
      <CardSellingPoint
        title='Park'
        content={
          <Text className='text-base'>
            Park your car for as long as you like in a space that matches your
            needs in the area you need it.
          </Text>
        }
        icon={'https://www.parkhound.com.au/images/svg/icon-point-park.svg'}
      />
    </div>
  );
};
