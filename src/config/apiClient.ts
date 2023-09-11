import axios from 'axios';
import { URLS } from 'src/constants';

const BASE_URL = 'https://hala-express.click/api';

export const fetchTodos = async () => {
  const response = await axios.get(`${BASE_URL}${URLS.CITY_TOP}`);
  return response.data;
};
