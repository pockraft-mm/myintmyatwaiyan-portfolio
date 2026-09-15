import { ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { project } from '../data/project';
import { cn } from '../lib/cn';
import { Logo } from './Logo';
import { RouteLink } from './RouteLink';
import { Button, buttonStyles } from './ui/Button';
import { Container } from './ui/Container';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/85 backdrop-blur-xl">
      <Container className="relative flex h-16 items-center justify-between">
        <RouteLink href="/" aria-label={`${project.name} home`} onClick={closeMenu}><Logo /></RouteLink>
        <nav
          className={cn(
            'items-center gap-1 text-base font-medium text-zinc-600 md:flex',
            menuOpen
              ? 'absolute inset-x-5 top-[calc(100%+0.75rem)] flex flex-col items-stretch rounded-2xl border border-zinc-200 bg-white p-3 shadow-float sm:inset-x-8'
              : 'hidden',
          )}
          aria-label="Main navigation"
        >
          <a className="focus-ring rounded-lg px-3 py-2 transition hover:bg-zinc-100 hover:text-zinc-950" href="/#about" onClick={closeMenu}>About</a>
          <a className="focus-ring rounded-lg px-3 py-2 transition hover:bg-zinc-100 hover:text-zinc-950" href="/#how-it-works" onClick={closeMenu}>How it works</a>
          <a className="focus-ring rounded-lg px-3 py-2 transition hover:bg-zinc-100 hover:text-zinc-950" href="/#pricing" onClick={closeMenu}>Pricing</a>
          <RouteLink href="/demo" className={buttonStyles({ size: 'sm', className: 'mt-1 md:ml-2 md:mt-0' })} onClick={closeMenu}>
            {project.primaryAction} <ArrowRight size={15} />
          </RouteLink>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </Container>
    </header>
  );
}
