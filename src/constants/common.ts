import { Option } from 'src/types';

const OPTIONS_SEARCH_BY_MONTHLY_DAILY: Option[] = [
  {
    value: 'MONTHLY',
    label: 'Monthly',
  },
  {
    value: 'DAILY',
    label: 'Daily',
  },
];

const URLS = {
  CITY_TOP: '/city-capital/top',
};

const QUERY_KEYS = {
  SEARCH_CITY: 'search-city',
};

export { OPTIONS_SEARCH_BY_MONTHLY_DAILY, QUERY_KEYS, URLS };
