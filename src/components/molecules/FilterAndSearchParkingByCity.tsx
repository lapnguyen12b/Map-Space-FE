'use client';
import React from 'react';
import { OPTIONS_SEARCH_BY_MONTHLY_DAILY } from 'src/constants';
import { cn } from 'src/utils';
import { FilterWrapper, MoreFilter, SelectInput } from '..';
import { SearchBar } from '../atoms/SearchBar';

export function FilterAndSearchParkingByCity() {
  const [showMoreFilters, setShowMoreFilters] = React.useState(false);

  const handleClickMoreFilters = () => {
    setShowMoreFilters((prev) => !prev);
  };

  const classNameMoreFilters = cn(
    'transition-all ease-linear duration-300 h-1 -translate-x-full border border-zinc-400 p-0 mt-3 flex items-center gap-3 bg-green-500',
    {
      'translate-x-0 bg-transparent h-fit p-2': showMoreFilters,
    }
  );

  return (
    <div className='relative'>
      <div className='relative z-10 grid auto-rows-auto grid-cols-[auto_1fr] gap-5'>
        <SelectInput options={OPTIONS_SEARCH_BY_MONTHLY_DAILY} />
        <SearchBar />
      </div>
      <div className='mt-4 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <FilterWrapper variant='price' title='Price' />
          <FilterWrapper variant='type' title='Type' />
          <FilterWrapper variant='distance' title='Distance' />
        </div>

        <MoreFilter
          handleClick={handleClickMoreFilters}
          showMoreFilters={showMoreFilters}
        />
      </div>

      <div className={classNameMoreFilters}>
        <FilterWrapper variant='price' title='Price' />
        <FilterWrapper variant='type' title='Type' />
        <FilterWrapper variant='distance' title='Distance' />
      </div>
    </div>
  );
}
