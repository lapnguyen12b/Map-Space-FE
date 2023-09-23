import Image from 'next/image';
import { ElementType } from 'react';
import { cn } from 'src/utils';
import { Text } from '.';

type CardSellingPointProps = {
  icon: string;
  title: string;
  content: string | React.ReactNode;
  classNameCard?: string;
  classNameTitle?: string;
  asText?: ElementType<any> | undefined;
};

export const CardSellingPoint = (props: CardSellingPointProps) => {
  const { icon, title, content, classNameCard, classNameTitle, asText } = props;
  const classNameCardMerge = cn(
    'grid grid-cols-[auto_1fr] items-center gap-5 rounded-md bg-green-100 p-5 shadow-xl',
    classNameCard
  );
  const classNameTitleMerge = cn(
    'font-raleway text-[26px] font-bold text-primary-black',
    classNameTitle
  );

  return (
    <div className={classNameCardMerge}>
      <Image src={icon} width={40} height={40} alt='' />
      <div>
        <Text as={asText} className={classNameTitleMerge}>
          {title}
        </Text>
        {content}
      </div>
    </div>
  );
};
