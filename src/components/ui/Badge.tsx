import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

export function Badge({ className, children, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex min-h-7 items-center rounded-full border border-zinc-200 bg-white px-3 text-[11px] font-semibold tracking-[0.04em] text-zinc-700 shadow-sm',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
