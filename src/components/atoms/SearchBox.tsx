'use client';
import { TextInput } from 'flowbite-react';
import { BsSearch } from 'react-icons/bs';
import { cn } from 'src/utils';
import { Button, Text } from '.';

type SearchBox = {
  className?: string;
};

export const SearchBox = (props: SearchBox) => {
  const { className } = props;

  const classNameMerge = cn(className);

  return (
    <div className='flex max-w-xl items-center gap-4'>
      <TextInput
        icon={BsSearch}
        placeholder='Enter your parking place'
        className='flex-1 focus:border-green-500'
      />
      <Button className='rounded-md bg-green-400 px-5 py-2 text-white'>
        <Text as='span' variant='base' className='font-raleway'>
          Search
        </Text>
      </Button>
    </div>
  );
};
