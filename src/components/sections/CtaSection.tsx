import { ArrowRight } from 'lucide-react';
import { RouteLink } from '../RouteLink';
import { Badge } from '../ui/Badge';
import { buttonStyles } from '../ui/Button';
import { Container } from '../ui/Container';

export function CtaSection() {
  return (
    <section className="border-b border-zinc-200 bg-white py-20 sm:py-24 lg:py-28" id="demo">
      <Container>
        <div className="dot-grid relative isolate overflow-hidden rounded-3xl bg-zinc-950 px-6 py-12 text-white shadow-float sm:px-10 sm:py-16 lg:flex lg:min-h-96 lg:items-end lg:justify-between lg:gap-12 lg:px-16">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_10%,rgba(255,255,255,0.18),transparent_35%)]" />
          <div className="max-w-3xl">
            <Badge className="border-white/15 bg-white/10 text-zinc-200 shadow-none">Ready when you are</Badge>
            <h2 className="mt-6 text-balance text-4xl font-semibold tracking-[-0.06em] sm:text-5xl lg:text-6xl">Give the project a clear next step.</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400">Close the pitch with one action: open the demo, join the waitlist, start a trial, or contact the team.</p>
          </div>
          <RouteLink href="/demo" className={buttonStyles({ variant: 'inverse', size: 'lg', className: 'mt-10 w-full lg:mt-0 lg:w-auto' })}>
            Launch the project <ArrowRight size={17} />
          </RouteLink>
        </div>
      </Container>
    </section>
  );
}
