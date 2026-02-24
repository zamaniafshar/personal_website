import { ReactNode } from 'react';

export function Tag({ children }: { children: ReactNode }) {
  return <span className="rounded-full border border-emerald-400/30 px-3 py-1 text-xs text-emerald-300">{children}</span>;
}
