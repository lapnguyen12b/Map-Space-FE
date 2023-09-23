import { Text } from '..';

export const HomeMapBanner = () => {
  return (
    <div className='relative h-[414px] bg-mapbanner bg-cover bg-center'>
      <Text
        as={'h2'}
        className='pt-12 text-center font-raleway text-[26px] font-semibold text-primary-black'
      >
        Check out{' '}
        <Text
          as='span'
          className='font-raleway text-[26px] font-extrabold text-green-500'
        >
          all
        </Text>{' '}
        the spaces available… not just the ones you know about
      </Text>

      <div className='absolute bottom-0 w-full bg-green-400 py-5'>
        <Text className='text-center font-raleway text-xl font-semibold text-white'>
          Driveways, garages, indoor parking and EV chargers, all available at
          the click of a button.
        </Text>
      </div>
    </div>
  );
};
