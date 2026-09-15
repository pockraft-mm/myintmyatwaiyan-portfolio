import { ArrowRight, Blocks, Gauge, ShieldCheck } from 'lucide-react';
import { project } from '../../data/project';
import { RouteLink } from '../RouteLink';
import { Badge } from '../ui/Badge';
import { ButtonLink, buttonStyles } from '../ui/Button';
import { Container } from '../ui/Container';

const highlights = [
  { icon: Blocks, label: 'Reusable sections' },
  { icon: Gauge, label: 'Fast by default' },
  { icon: ShieldCheck, label: 'Accessible patterns' },
] as const;

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-zinc-200">
      <div className="dot-grid absolute inset-0 -z-20 opacity-55 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-80 max-w-4xl bg-[radial-gradient(ellipse_at_top,rgba(212,212,216,0.72),transparent_68%)] blur-3xl" />
      <Container className="flex flex-col items-center pb-16 pt-12 text-center sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
        <Badge className="bg-white/80 text-xs backdrop-blur-sm">Pockraft - commerical landing page template</Badge>
        <h1 className="mt-7 max-w-5xl text-balance text-6xl font-semibold leading-[0.98] tracking-[-0.07em] text-zinc-950 sm:text-7xl lg:text-[6rem]">
          {project.title}
        </h1>
        <p className="mt-7 max-w-2xl text-balance text-lg leading-8 text-zinc-600 sm:text-xl sm:leading-9">{project.description}</p>
        <div className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <RouteLink href={project.primaryUrl} className={buttonStyles({ size: 'lg' })}>
            {project.primaryAction} <ArrowRight size={17} />
          </RouteLink>
          <ButtonLink href="#how-it-works" variant="outline" size="lg">{project.secondaryAction}</ButtonLink>
        </div>
        <div className="mt-16 grid w-full max-w-3xl divide-y divide-zinc-200 overflow-hidden rounded-2xl border border-zinc-200 bg-white/85 shadow-soft backdrop-blur-sm sm:mt-20 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {highlights.map(({ icon: HighlightIcon, label }) => (
            <span className="flex min-h-16 items-center justify-center gap-2.5 px-4 text-sm font-medium text-zinc-600" key={label}>
              <HighlightIcon size={15} className="text-zinc-950" /> {label}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
