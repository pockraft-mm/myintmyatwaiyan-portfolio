import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

type Variant = 'default' | 'outline' | 'ghost' | 'inverse';
type Size = 'default' | 'sm' | 'lg' | 'icon';

const variants: Record<Variant, string> = {
  default: 'border-zinc-950 bg-zinc-950 text-white shadow-sm hover:bg-zinc-800 hover:border-zinc-800',
  outline: 'border-zinc-200 bg-white text-zinc-950 shadow-sm hover:border-zinc-300 hover:bg-zinc-50',
  ghost: 'border-transparent bg-transparent text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950',
  inverse: 'border-white bg-white text-zinc-950 shadow-sm hover:bg-zinc-200 hover:border-zinc-200',
};

const sizes: Record<Size, string> = {
  default: 'h-10 px-4 text-sm',
  sm: 'h-9 px-3.5 text-xs',
  lg: 'h-12 px-5 text-sm',
  icon: 'size-10 p-0',
};

export function buttonStyles({ variant = 'default', size = 'default', className }: { variant?: Variant; size?: Size; className?: string } = {}) {
  return cn(
    'focus-ring inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl border font-semibold transition duration-200 hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-50',
    variants[variant],
    sizes[size],
    className,
  );
}

export function Button({ variant, size, className, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: Size }) {
  return <button className={buttonStyles({ variant, size, className })} {...props} />;
}

export function ButtonLink({ variant, size, className, children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant; size?: Size; children: ReactNode }) {
  return <a className={buttonStyles({ variant, size, className })} {...props}>{children}</a>;
}
