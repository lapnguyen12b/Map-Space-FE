export interface ISearchCity {
  latitude: number;
  longitude: number;
  formattedAddress: string;
  country: string;
  countryCode: string;
  city: string;
  zipcode: string;
  neighbourhood: string;
  extra: {
    id: string;
    address: string;
    category: string;
  };
}

export interface ICommon {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ITopCityResponse extends ICommon {
  status: string;
  cityName: string;
  lat: string;
  lng: string;
  url: string;
  imageUrl: string;
}

export interface ISearchCitiesResponse {
  status: 'success' | 'error';
  data: {
    cities: ISearchCity[];
  };
}
