import { useQuery } from 'react-query';
import { apiClient } from 'src/config';
import { URLS } from 'src/constants';

type City = {
  id: string;
  lat: string;
  lng: string;
  url: string;
  imgUrl: string;
};

const QUERY_KEY = ['City_Top'];

const fetchCityTop = async (): Promise<City[]> => {
  const { data } = await apiClient.get(`${URLS.CITY_TOP}`);
  return data;
};

export const useGetCityTop = () => {
  return useQuery<City[], Error>(QUERY_KEY, fetchCityTop);
};
