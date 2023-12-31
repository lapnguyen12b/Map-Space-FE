import { cn } from 'src/utils';

type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'base';

const textVariant: Record<TextVariant, string> = {
  h1: 'text-3xl',
  h2: 'text-2xl',
  h3: 'text-lg', // 18
  h4: 'text-sm',
  h5: 'text-xs',
  base: 'text-base', // 16
};

type TextOwnProps<E extends React.ElementType> = {
  children: React.ReactNode;
  variant?: TextVariant;
  className?: string;
  as?: E;
};

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

export const Text = <E extends React.ElementType = 'p'>({
  className,
  children,
  variant = 'h4',
  as,
}: TextProps<E>) => {
  const Component = as ?? 'p';
  const classNameMerge = cn(textVariant[variant], 'break-words', className);
  return <Component className={classNameMerge}>{children}</Component>;
};
