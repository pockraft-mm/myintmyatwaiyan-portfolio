import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLandingPage } from '../context/LandingPageContext';
import { ActionLink } from './ActionLink';
import { Logo } from './Logo';
import { RouteLink } from './RouteLink';
import { Button } from './ui/button';

export function Header() {
  const landingPage = useLandingPage();
  const { brand } = landingPage;
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <RouteLink href="/" aria-label={`${brand.name} home`} onClick={closeMenu}><Logo /></RouteLink>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
        {landingPage.navigation.map((item) => (
          item.external ? (
            <a key={item.href} href={item.href} target="_blank" rel="noreferrer" onClick={closeMenu}>{item.label}</a>
          ) : (
            <RouteLink key={item.href} href={item.href} onClick={closeMenu}>{item.label}</RouteLink>
          )
        ))}
        <ActionLink action={landingPage.hero.primaryAction} showArrow onClick={closeMenu} />
      </nav>
      <Button variant="ghost" className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen((open) => !open)}>
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </Button>
    </header>
  );
}
