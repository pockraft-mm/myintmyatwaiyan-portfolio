import { ExternalLink } from 'lucide-react';
import { project, site } from '../data/project';
import { Logo } from './Logo';
import { RouteLink } from './RouteLink';
import { Container } from './ui/Container';

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-white">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1fr_180px_220px] lg:gap-16 lg:py-20">
        <div className="sm:col-span-2 lg:col-span-1">
          <RouteLink className="focus-ring inline-flex rounded-lg" href="/"><Logo inverse /></RouteLink>
          <p className="mt-5 max-w-xs text-sm leading-6 text-zinc-400">A polished React landing page template for presenting and launching products.</p>
        </div>
        <FooterLinks title="Project">
          <a href="/#about">About</a>
          <a href="/#how-it-works">How it works</a>
          <a href="/#pricing">Pricing</a>
          <RouteLink href="/demo">Demo</RouteLink>
        </FooterLinks>
        <FooterLinks title="Resources">
          <a href={site.repositoryUrl} target="_blank" rel="noreferrer">Source code</a>
          <a href={site.readmeUrl} target="_blank" rel="noreferrer">Documentation</a>
          <a href={site.creditsUrl} target="_blank" rel="noreferrer">Credits</a>
          <a href={site.referenceCreatorGitHub} target="_blank" rel="noreferrer">Creator on GitHub</a>
        </FooterLinks>
      </Container>

      <Container className="grid gap-4 border-t border-white/10 py-6 lg:grid-cols-[220px_1fr] lg:gap-8">
        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500">Open-source acknowledgements</span>
        <div className="grid gap-3 text-xs leading-5 text-zinc-400">
          <a className="group inline-flex items-start gap-2 transition hover:text-white" href={site.referenceCreatorGitHub} target="_blank" rel="noreferrer">
            Reference template created by {site.referenceCreator} (@MoriartyLink). <ExternalLink className="mt-0.5 shrink-0" size={13} />
          </a>
          <a className="group inline-flex items-start gap-2 transition hover:text-white" href={site.upstreamUrl} target="_blank" rel="noreferrer">
            With sincere gratitude to {site.upstreamFoundation} for the foundation and inspiration that helped make this app possible. <ExternalLink className="mt-0.5 shrink-0" size={13} />
          </a>
        </div>
      </Container>

      <Container className="flex min-h-16 flex-col justify-center gap-1 border-t border-white/10 py-4 text-[11px] text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 {project.name}</span>
        <span>Open-source landing page template</span>
      </Container>
    </footer>
  );
}

function FooterLinks({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-start gap-3 text-sm text-zinc-300">
      <span className="mb-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500">{title}</span>
      <div className="contents [&_a]:transition [&_a:hover]:text-white">{children}</div>
    </div>
  );
}
