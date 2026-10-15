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
  const mobileItems = [
    ...landingPage.navigation,
    {
      label: landingPage.hero.primaryAction.label,
      href: landingPage.hero.primaryAction.href,
      external: landingPage.hero.primaryAction.external,
    },
  ];
  const point = (angle: number, radius: number) => {
    const radians = angle * Math.PI / 180;
    return { x: 220 + radius * Math.cos(radians), y: 220 + radius * Math.sin(radians) };
  };
  const sectorPath = (start: number, end: number) => {
    const outerStart = point(start, 202);
    const outerEnd = point(end, 202);
    const innerEnd = point(end, 88);
    const innerStart = point(start, 88);
    return `M ${outerStart.x} ${outerStart.y} A 202 202 0 0 1 ${outerEnd.x} ${outerEnd.y} L ${innerEnd.x} ${innerEnd.y} A 88 88 0 0 0 ${innerStart.x} ${innerStart.y} Z`;
  };

  return (
    <>
      <header className="site-header">
        <RouteLink href="/" aria-label={`${brand.name} home`} onClick={closeMenu}><Logo /></RouteLink>
        <nav className="nav" aria-label="Main navigation">
          {landingPage.navigation.map((item) => item.external ? (
            <a key={item.href} href={item.href} target="_blank" rel="noreferrer">{item.label}</a>
          ) : (
            <RouteLink key={item.href} href={item.href}>{item.label}</RouteLink>
          ))}
          <ActionLink action={landingPage.hero.primaryAction} showArrow />
        </nav>
      </header>
      <div className={`mobile-donut${menuOpen ? ' is-open' : ''}`}>
        <nav className="mobile-donut__nav" aria-label="Mobile navigation">
          <svg className="mobile-donut__wheel" viewBox="0 0 220 220" aria-hidden={!menuOpen}>
            {mobileItems.map((item, index) => {
              const step = 90 / mobileItems.length;
              const start = 180 + index * step;
              const end = start + step;
              const labelPoint = point((start + end) / 2, 144);
              const segment = <><path d={sectorPath(start, end)} /><text x={labelPoint.x} y={labelPoint.y}>{item.label}</text></>;
              return item.external ? (
                <a key={`${item.href}-${item.label}`} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label} tabIndex={menuOpen ? 0 : -1} onClick={closeMenu}>{segment}</a>
              ) : (
                <RouteLink key={`${item.href}-${item.label}`} href={item.href} aria-label={item.label} tabIndex={menuOpen ? 0 : -1} onClick={closeMenu}>{segment}</RouteLink>
              );
            })}
          </svg>
        </nav>
        <Button variant="ghost" className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={16} strokeWidth={2.5} /> : <Menu size={22} />}
        </Button>
      </div>
    </>
  );
}
