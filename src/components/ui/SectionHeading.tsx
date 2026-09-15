import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';
import { Badge } from './Badge';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  compact?: boolean;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, compact = false, align = 'center', className }: SectionHeadingProps) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      <Badge>{eyebrow}</Badge>
      <h2 className={cn('mt-5 text-balance font-semibold tracking-[-0.055em] text-zinc-950', compact ? 'text-4xl sm:text-5xl' : 'text-4xl sm:text-5xl lg:text-6xl')}>
        {title}
      </h2>
      {description && <p className={cn('mt-5 max-w-2xl text-base leading-7 text-zinc-600', align === 'center' && 'mx-auto')}>{description}</p>}
    </div>
  );
}
