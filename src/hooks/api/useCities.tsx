import { useQuery } from '@tanstack/react-query';
import { apiClient } from 'src/config';
import { QUERY_KEYS, URLS } from 'src/constants';
import {
  ISearchCitiesResponse,
  ISearchCity,
  ITopCityResponse,
} from 'src/types/Cities';
import { baseUrl } from 'src/utils';

const fetchSearchCities = async (address: string): Promise<ISearchCity[]> => {
  const response: ISearchCitiesResponse = await apiClient.get(
    `${baseUrl}/api/top-cities?address=${address}`
  );

  return response.data.cities;
};

const fetchTopCities = async (): Promise<ITopCityResponse[]> => {
  const response: ITopCityResponse[] = await apiClient.get(`${URLS.CITY_TOP}`);

  return response;
};

export const useSearchCities = (address: string) => {
  const fallback: ISearchCity[] | undefined = [];
  const {
    isLoading,
    isError,
    data = fallback,
    error,
  } = useQuery({
    queryKey: [QUERY_KEYS.SEARCH_CITY, address],
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

export const useGetTopCities = () => {
  const fallback: ITopCityResponse[] | undefined = [];
  const {
    isLoading,
    isError,
    data = fallback,
    error,
  } = useQuery({
    queryKey: [URLS.CITY_TOP],
    queryFn: fetchTopCities,
  });

  return {
    isLoading,
    isError,
    data,
    error,
  };
};
