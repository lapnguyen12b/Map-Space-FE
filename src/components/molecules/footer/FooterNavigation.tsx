import { PhoneIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { Text } from 'src/components';
import {
  FOOTER_NAVIGATION,
  FOOTER_POPULAR_BLOGS,
} from 'src/constants/fakeData';

export const FooterNavigation = () => {
  return (
    <div className='grid grid-cols-1 gap-5 px-4 py-8 md:grid-cols-2 lg:grid-cols-3'>
      <section>
        <Text as='h3' className='font-semibold'>
          Connect with us
        </Text>
        <br />
        <ul className='grid grid-cols-1 gap-5'>
          {FOOTER_NAVIGATION.slice(5).map((contact) => (
            <li
              key={`footer-contact-${contact.title}`}
              className='flex items-center gap-5'
            >
              <PhoneIcon className='aspect-square h-5 text-black' />
              <Link href={contact.href} target='_blank'>
                <Text className='text-green-400'>{contact.title}</Text>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className='order-3 md:order-2 lg:order-3'>
        <Text as='h3' className='font-semibold'>
          Navigation
        </Text>
        <br />
        <ul className='grid grid-cols-1 gap-5'>
          {FOOTER_NAVIGATION.map((navigation) => (
            <li key={`footer-blog-${navigation.title}`}>
              <Link href={navigation.href}>
                <Text className='text-green-400 '>{navigation.title}</Text>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className='order-2 md:order-3 lg:order-2'>
        <Text as='h3' className='font-semibold'>
          Popular blog articles
        </Text>
        <br />
        <ul className='grid grid-cols-1 gap-5'>
          {FOOTER_POPULAR_BLOGS.map((blog) => (
            <li key={`footer-blog-${blog.title}`}>
              <Link href={blog.href}>
                <Text className='text-green-400 underline'>{blog.title}</Text>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
