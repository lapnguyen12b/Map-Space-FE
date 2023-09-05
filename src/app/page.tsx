import Link from 'next/link';
import { Text } from 'src/components';

export default function Home() {
  return (
    <div className='h-[calc(100%_-_62px_-_32px)]'>
      <Link
        href={{
          pathname: '/parking/hanoi',
        }}
      >
        <Text variant='h2' className='text-blue-600'>
          to the city
        </Text>
      </Link>
    </div>
  );
}
