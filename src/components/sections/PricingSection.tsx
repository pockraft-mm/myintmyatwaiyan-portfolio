import { ArrowRight, Check } from 'lucide-react';
import { pricingTiers } from '../../data/project';
import { cn } from '../../lib/cn';
import { ButtonLink } from '../ui/Button';
import { Card, CardContent, CardHeader } from '../ui/Card';
import { Container } from '../ui/Container';
import { Icon } from '../ui/Icon';
import { SectionHeading } from '../ui/SectionHeading';

export function PricingSection() {
  return (
    <section className="scroll-mt-16 border-b border-zinc-200 bg-zinc-50 py-20 sm:py-24 lg:py-28" id="pricing">
      <Container>
        <SectionHeading
          eyebrow="Simple pricing"
          title={<>Choose the plan<br className="hidden sm:block" /> that fits your needs.</>}
          description="Start with the free tier and upgrade as your project grows."
          compact
        />
        <div className="mt-12 grid items-stretch gap-4 md:grid-cols-3 lg:mt-16">
          {pricingTiers.map(({ icon, label, price, period, description, features }) => {
            const featured = label === 'Pro';
            return (
              <Card className={cn('relative flex min-h-[31rem] flex-col', featured && 'border-zinc-950 bg-zinc-950 text-white md:-translate-y-3 md:hover:-translate-y-4')} key={label}>
                {featured && <span className="absolute -top-3 right-5 rounded-full border border-zinc-800 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-zinc-950 shadow-sm">Most popular</span>}
                <CardHeader>
                  <span className={cn('grid size-11 place-items-center rounded-xl border', featured ? 'border-white/15 bg-white/10' : 'border-zinc-200 bg-zinc-50')}><Icon name={icon} size={19} /></span>
                  <span className={cn('text-[10px] font-semibold uppercase tracking-[0.12em]', featured ? 'text-zinc-400' : 'text-zinc-500')}>{label}</span>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col pt-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-semibold tracking-[-0.05em]">{price}</span>
                    {period && <span className={cn('text-sm', featured ? 'text-zinc-400' : 'text-zinc-500')}>{period}</span>}
                  </div>
                  <p className={cn('mt-4 min-h-10 text-sm leading-6', featured ? 'text-zinc-400' : 'text-zinc-600')}>{description}</p>
                  <div className={cn('my-6 border-t', featured ? 'border-white/10' : 'border-zinc-200')} />
                  <ul className="grid gap-3">
                    {features.map((feature) => (
                      <li className={cn('flex items-start gap-2.5 text-sm', featured ? 'text-zinc-300' : 'text-zinc-700')} key={feature}>
                        <span className={cn('mt-0.5 grid size-4 shrink-0 place-items-center rounded-full', featured ? 'bg-white text-zinc-950' : 'bg-zinc-950 text-white')}><Check size={10} strokeWidth={3} /></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <ButtonLink href="/demo" variant={featured ? 'inverse' : 'outline'} className="mt-auto w-full">
                    {label === 'Enterprise' ? 'Contact sales' : `Get ${label}`} <ArrowRight size={15} />
                  </ButtonLink>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
