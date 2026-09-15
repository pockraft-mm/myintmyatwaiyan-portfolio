import { project } from '../data/project';
import { cn } from '../lib/cn';

export function Logo({ inverse = false, label = project.name }: { inverse?: boolean; label?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5 text-sm font-bold tracking-[-0.035em]', inverse ? 'text-white' : 'text-zinc-950')}>
      <span className={cn('grid size-8 place-items-center overflow-hidden rounded-lg border bg-black', inverse ? 'border-white/15' : 'border-zinc-200')}>
        <img className="size-full object-cover" src="/pockraft-logo.png" alt="" />
      </span>
      <span>{label}</span>
    </span>
  );
}
