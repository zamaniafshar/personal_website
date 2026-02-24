import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost';
};

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-xl border px-5 py-2.5 text-sm font-medium transition duration-300',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow/65 focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
        variant === 'primary'
          ? 'border-panelBorder/45 bg-gradient-to-b from-glow/28 to-glow/16 text-text shadow-glow hover:-translate-y-0.5 hover:shadow-glow-strong'
          : 'border-panelBorder/24 bg-panel/45 text-text/90 hover:-translate-y-0.5 hover:border-panelBorder/50 hover:text-text',
        className
      )}
      {...props}
    />
  );
}
