import { cn } from 'src/utils';
import {
  FooterCopyright,
  FooterNavigation,
  FooterSecTrace,
  FooterSpacer,
} from '..';

export const Footer = () => {
  return (
    <footer
      className={cn(
        'grid grid-cols-[24px_1fr_24px] bg-[#f2f4f5] lg:grid-cols-[1fr_4fr_1fr] 2xl:grid-cols-[1fr_3fr_1fr]'
      )}
    >
      <div className='col-span-1 col-start-2 mt-10 bg-white'>
        <FooterNavigation />
        <FooterSecTrace />
        <FooterSpacer />
        <FooterCopyright />
      </div>
    </footer>
  );
};
