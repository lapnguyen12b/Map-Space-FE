'use client';

import { useClickAway, useDebounce } from '@uidotdev/usehooks';
import { TextInput } from 'flowbite-react';
import { ChangeEvent, LegacyRef, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useSearchCities } from 'src/hooks/api/useCities';
import { ISearchCity } from 'src/types/Cities';
import { cn } from 'src/utils';
import { Button, Text } from '.';

type SearchBox = {
  className?: string;
};

export const SearchBar = (props: SearchBox) => {
  const { className } = props;
  const classNameMerge = cn(className);

  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const [isOpen, setIsOpen] = useState(false);

  const { data: searchCities } = useSearchCities(debouncedSearchTerm);
  const ref = useClickAway(() => {
    setIsOpen(false);
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setIsOpen(true);
    }
    setSearchTerm(e.target.value);
  };

  const handleChooseCity = (city: ISearchCity) => {
    setIsOpen(false);
    setSearchTerm(city.formattedAddress);
  };

  const handleOnClickSearch = () => {
    console.log('📢 [SearchBar.tsx:45]', searchTerm);
  };

  return (
    <div className='flex max-w-xl items-center gap-4'>
      <div className='relative flex-1'>
        <TextInput
          icon={BsSearch}
          placeholder='Enter your parking place'
          className='w-full focus:border-green-500'
          onChange={handleChange}
          value={searchTerm}
          onFocus={() => setIsOpen(true)}
        />
        {isOpen && (
          <ul
            className='absolute top-[calc(100%_+_4px)] w-full rounded border bg-white'
            ref={ref as LegacyRef<HTMLUListElement>}
          >
            {searchCities?.map((city) => (
              <li
                key={`${city.zipcode}-${city.latitude}-${city.longitude}`}
                onClick={() => handleChooseCity(city)}
                className='flex min-h-[42px] cursor-pointer items-center border-b px-5  last:border-none hover:bg-green-100'
              >
                {city.formattedAddress}
              </li>
            ))}
          </ul>
        )}
      </div>

      <Button
        className='rounded-md bg-green-400 px-5 py-2 text-white'
        onClick={handleOnClickSearch}
      >
        <Text as='span' variant='base' className='font-raleway'>
          Search
        </Text>
      </Button>
    </div>
  );
};
