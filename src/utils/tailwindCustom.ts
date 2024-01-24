import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const twClassMerge = (...args: ClassValue[]) => twMerge(clsx(args));
