import { URLS } from 'src/constants';
import { ITopCityResponse } from 'src/types/Cities';
import { cn } from 'src/utils';
import { CardTopCity } from '.';

type HomeSectionTopCitiesProps = {
  classNameWrapper?: string;
};

async function getTopCities() {
  const res = await fetch(`${process.env.DOMAN_BE}${URLS.CITY_TOP}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export const HomeSectionTopCities = async (
  props: HomeSectionTopCitiesProps
) => {
  const { classNameWrapper } = props;

  const classNameWrapperMerge = cn(
    'grid 2xl:grid-cols-4 gap-5',
    classNameWrapper
  );

  const topCities: ITopCityResponse[] = await getTopCities();

  return (
    <div className={classNameWrapperMerge}>
      {topCities.map((city) => (
        <CardTopCity key={city.id} city={city} />
      ))}
    </div>
  );
};
