import Link from 'next/link';
import {
  SvgParkhound,
  SvgSpacer,
  SvgSpacerMini,
  SvgSpacerMini1,
  SvgWhereIPark,
  Text,
} from 'src/components';
import { ClassName } from 'src/types';
import { cn } from 'src/utils';

type FooterSpacerProps = ClassName;

export const FooterSpacer = ({ className }: FooterSpacerProps) => {
  return (
    <div className={cn(className)}>
      <div className='mx-auto mt-8 flex w-1/2 flex-col items-center justify-center gap-10 2xl:w-full'>
        <Text className='text-gray-500'>
          Parkhound is a part of the Spacer Technologies Group
        </Text>

        <div className='grid grid-cols-2 gap-4 2xl:grid-cols-6'>
          <Link
            href={'https://www.spacertechnologies.co'}
            className='col-span-2 justify-self-center 2xl:place-self-center 2xl:justify-self-start'
          >
            <SvgSpacer />
          </Link>
          <Link
            href={'https://www.spacertechnologies.co'}
            className='2xl:place-self-center'
          >
            <SvgParkhound />
          </Link>

          <Link
            href={'https://www.spacertechnologies.co'}
            className='justify-self-center 2xl:place-self-center'
          >
            <SvgSpacerMini />
          </Link>

          <Link
            href={'https://www.spacertechnologies.co'}
            className='2xl:place-self-center'
          >
            <SvgSpacerMini1 />
          </Link>

          <Link
            href={'https://www.spacertechnologies.co'}
            className='2xl:place-self-center'
          >
            <SvgWhereIPark />
          </Link>
        </div>
      </div>
    </div>
  );
};
