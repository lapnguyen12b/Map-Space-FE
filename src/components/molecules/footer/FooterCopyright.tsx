import Image from 'next/image';
import Link from 'next/link';
import { SvgAppStore, SvgPlayStore, Text } from 'src/components';
import { ClassName } from 'src/types';
import { cn } from 'src/utils';

type FooterCopyrightProps = ClassName;

export const FooterCopyright = ({ className }: FooterCopyrightProps) => {
  return (
    <div
      className={cn(
        'mt-8 grid grid-cols-1 gap-10 border-t border-black/75 py-8',
        className
      )}
    >
      <div className='grid grid-cols-2 items-center justify-items-center gap-5 lg:flex lg:justify-center lg:gap-10'>
        <Link href={'https://www.parking.asn.au/'} target='_blank'>
          <Image src={'/img/proudly.png'} width={200} height={40} alt='' />
        </Link>
        <Link href={'https://www.parking.asn.au/'} target='_blank'>
          <Image src={'/img/findus.png'} width={92} height={40} alt='' />
        </Link>
        <Link href={'https://www.parking.asn.au/'} target='_blank'>
          <SvgAppStore />
        </Link>
        <Link href={'https://www.parking.asn.au/'} target='_blank'>
          <SvgPlayStore />
        </Link>
      </div>
      <Text className='text-center text-gray-500'>
        © Parkhound 2023 - ABN: 96 602 017 210 - Level 3, 55 Pyrmont Bridge Rd,
        Pyrmont NSW 2009 - Proudly part of Spacer Marketplaces
      </Text>
    </div>
  );
};
