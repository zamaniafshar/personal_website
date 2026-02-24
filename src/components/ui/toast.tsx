'use client';

export function Toast({ show, text }: { show: boolean; text: string }) {
  if (!show) return null;
  return <div className="fixed bottom-20 right-5 z-50 rounded-lg bg-emerald-500 px-4 py-2 text-sm text-black">{text}</div>;
}
