'use client';

import { TextInput } from 'flowbite-react';
import { Text } from '..';
import { Button } from '../atoms/Button';

type NotifyCardProps = {
  city: string;
};

export const NotifyCard = (props: NotifyCardProps) => {
  const { city } = props;
  return (
    <div className='flex flex-col gap-2 rounded bg-zinc-800 p-5 text-white'>
      <Text className='font-semibold'>
        Be the FIRST to know about new listings in {city}
      </Text>
      <Text variant='h5'>
        Get notified about new spaces and snap them up before anyone else.
      </Text>
      <form className='grid auto-rows-auto grid-cols-[1fr_auto] gap-3'>
        <div>
          <TextInput placeholder='Email' required type='email' />
        </div>
        <Button className='rounded-xl bg-green-500  px-6' type='submit'>
          <Text variant='h5'>Notify me</Text>
        </Button>
      </form>
    </div>
  );
};
