import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isProduction = process.env.NEXT_PUBLIC_ENV === 'production';

export const baseUrl = isProduction
  ? process.env.NEXT_PUBLIC_DOMAIN_FE_PROD
  : process.env.NEXT_PUBLIC_DOMAIN_FE;
