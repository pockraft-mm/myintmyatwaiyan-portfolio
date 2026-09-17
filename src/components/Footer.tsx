import { ExternalLink } from 'lucide-react';
import { useLandingPage } from '../context/LandingPageContext';
import { Logo } from './Logo';
import { RouteLink } from './RouteLink';

export function Footer() {
  const landingPage = useLandingPage();
  const { brand, footer } = landingPage;

  return (
    <footer className="footer">
      <div className="container footer-top">
        <div>
          <RouteLink href="/"><Logo inverse /></RouteLink>
          <p>{footer.description}</p>
        </div>
        {footer.columns.map((column) => (
          <div className="footer-links" key={column.title}>
            <span>{column.title}</span>
            {column.links.map((link) => (
              link.external ? (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
              ) : (
                <RouteLink key={link.href} href={link.href}>{link.label}</RouteLink>
              )
            ))}
          </div>
        ))}
      </div>
      <div className="container repo-credit-row">
        <span className="credit-label">Open-source acknowledgements</span>
        <div className="repo-credit-links">
          {footer.acknowledgements.map((item) => (
            <a key={item.href} href={item.href} target="_blank" rel="noreferrer">
              {item.label} <ExternalLink size={13} />
            </a>
          ))}
        </div>
      </div>
      <div className="container footer-bottom"><span>© {brand.copyrightYear} {brand.name}</span><span>{footer.tagline}</span></div>
    </footer>
  );
}
