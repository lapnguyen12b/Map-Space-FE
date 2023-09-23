import { cn } from 'src/utils';
import { CardTopCity } from '.';

type HomeSectionTopCitiesProps = {
  classNameWrapper?: string;
};

export const HomeSectionTopCities = (props: HomeSectionTopCitiesProps) => {
  const { classNameWrapper } = props;

  const classNameWrapperMerge = cn(
    'grid 2xl:grid-cols-4 gap-5',
    classNameWrapper
  );

  return (
    <div className={classNameWrapperMerge}>
      {Array(16)
        .fill(1)
        .map((_, index) => (
          <CardTopCity key={index} cityName={String(index)} url='#' />
        ))}
    </div>
  );
};
