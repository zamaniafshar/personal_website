import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        'rounded-xl border border-emerald-400/40 bg-emerald-500/10 px-5 py-2.5 text-sm font-medium text-emerald-300 transition hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-emerald-400/60',
        className
      )}
      {...props}
    />
  );
}
