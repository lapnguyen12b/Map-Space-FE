import { Text } from '.';

export const HeaderBanner = () => {
  return (
    <div className='flex h-12 items-center justify-center bg-green-500 text-white lg:h-8'>
      <Text className='text-center'>
        🚗 &nbsp;<b>Save up to 50% off</b> parking. You&apos;re protected by our{' '}
        <b>Money Back Guarantee</b>&nbsp; 🅿
      </Text>
    </div>
  );
};
