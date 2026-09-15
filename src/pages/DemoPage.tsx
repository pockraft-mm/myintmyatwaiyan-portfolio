import { ArrowLeft, ArrowRight, Play } from 'lucide-react';
import type { FormEvent } from 'react';
import { RouteLink } from '../components/RouteLink';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';

export function DemoPage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => event.preventDefault();

  return (
    <div>
      <section className="relative isolate overflow-hidden border-b border-zinc-200 py-16 text-center sm:py-20 lg:py-24">
        <div className="dot-grid absolute inset-0 -z-20 opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-72 max-w-3xl bg-[radial-gradient(ellipse_at_top,rgba(212,212,216,0.7),transparent_70%)] blur-3xl" />
        <Container>
          <RouteLink href="/" className="focus-ring mx-auto mb-10 flex w-fit items-center gap-2 rounded-lg px-2 py-1 text-xs font-medium text-zinc-500 transition hover:text-zinc-950">
            <ArrowLeft size={15} /> Back to overview
          </RouteLink>
          <Badge>Project demo</Badge>
          <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1] tracking-[-0.065em] text-zinc-950 sm:text-6xl lg:text-7xl">Show the product,<br className="hidden sm:block" /> not another paragraph.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-7 text-zinc-600 sm:text-lg">Use this route for a live product, interactive prototype, walkthrough video, or focused proof of concept.</p>
        </Container>
      </section>

      <section className="border-b border-zinc-200 bg-zinc-50 py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="relative flex aspect-[4/3] flex-col items-center justify-center overflow-hidden rounded-2xl border border-zinc-200 bg-white text-zinc-500 shadow-float sm:aspect-video">
            <div className="absolute inset-x-0 top-0 flex h-11 items-center gap-1.5 border-b border-zinc-200 bg-zinc-50/80 px-4 backdrop-blur-sm">
              <span className="size-2 rounded-full bg-zinc-300" />
              <span className="size-2 rounded-full bg-zinc-300" />
              <span className="size-2 rounded-full bg-zinc-300" />
              <small className="absolute left-1/2 -translate-x-1/2 text-[10px] font-medium text-zinc-400">your-project-demo.com</small>
            </div>
            <div className="dot-grid absolute inset-0 top-11 opacity-45 [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />
            <button className="focus-ring relative grid size-16 cursor-pointer place-items-center rounded-full bg-zinc-950 text-white shadow-lg transition duration-200 hover:scale-105 hover:bg-zinc-800" type="button" aria-label="Play project demo">
              <Play className="translate-x-0.5" size={23} fill="currentColor" />
            </button>
            <p className="relative mt-4 text-xs font-medium sm:text-sm">Embed your project demo or video here</p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <Container className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className="lg:sticky lg:top-28">
            <Badge>Contact the team</Badge>
            <h2 className="mt-6 text-balance text-4xl font-semibold tracking-[-0.055em] text-zinc-950 sm:text-5xl">Interested in the project?</h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-zinc-600">Use this section for feedback, early access requests, partnerships, or questions after the pitch.</p>
          </div>
          <form className="grid gap-5 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 shadow-soft sm:p-8" onSubmit={handleSubmit}>
            <Field label="Name"><input className={inputStyles} name="name" placeholder="Your name" autoComplete="name" /></Field>
            <Field label="Email"><input className={inputStyles} name="email" type="email" placeholder="you@example.com" autoComplete="email" /></Field>
            <Field label="Message"><textarea className={inputStyles} name="message" rows={5} placeholder="Tell us what you think..." /></Field>
            <Button className="mt-1 w-full sm:w-fit" type="submit">Send message <ArrowRight size={15} /></Button>
          </form>
        </Container>
      </section>
    </div>
  );
}

const inputStyles = 'focus-ring w-full rounded-xl border border-zinc-200 bg-white px-3.5 py-3 text-sm text-zinc-950 shadow-sm placeholder:text-zinc-400 transition hover:border-zinc-300 focus:border-zinc-400';

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="grid gap-2 text-xs font-semibold text-zinc-800">{label}{children}</label>;
}
