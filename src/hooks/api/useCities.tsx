import { useQuery } from '@tanstack/react-query';
import ky from 'ky-universal';
import { ISearchCitiesResponse, ISearchCity } from 'src/types/Cities';

const fetchSearchCities = async (address: string): Promise<ISearchCity[]> => {
  const parsed: ISearchCitiesResponse = await ky(
    `http://localhost:8080/api/top-cities?address=${address}`
  ).json();
  return parsed.data.cities;
};

export const useSearchCities = (address: string) => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['search-city', address],
    queryFn: () => fetchSearchCities(address),
    enabled: !!address,
  });

  return {
    isLoading,
    isError,
    data,
    error,
  };
};
