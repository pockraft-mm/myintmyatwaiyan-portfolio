import { ActionLink } from '../components/ActionLink';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { useLandingPage } from '../context/LandingPageContext';
import { Icon } from '../factories/iconRegistry';

export function LandingPage() {
  const landingPage = useLandingPage();
  const { cta, features, hero, pricing, process } = landingPage;

  return (
    <>
      <section className="hero section-border">
        <div className="container hero-inner">
          <Badge>{hero.eyebrow}</Badge>
          <h1>{hero.title}</h1>
          <p>{hero.description}</p>
          <div className="hero-actions">
            <ActionLink action={hero.primaryAction} showArrow />
            <ActionLink action={hero.secondaryAction} />
          </div>
          <div className="hero-signals">
            {hero.trustSignals.map((signal) => (
              <span key={signal.label}><Icon name={signal.icon} size={15} /> {signal.label}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="features section-border muted-section" id="about">
        <div className="container">
          <div className="section-heading"><Badge>{features.eyebrow}</Badge><h2>{features.title}</h2><p>{features.description}</p></div>
          <div className="card-grid">
            {features.items.map((item, index) => (
              <Card key={item.title}><CardHeader><span className="icon-box"><Icon name={item.icon} /></span><span className="card-number">0{index + 1}</span></CardHeader><CardContent><h3>{item.title}</h3><p>{item.description}</p></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="details section-border" id="how-it-works">
        <div className="container">
          <div className="section-heading compact-heading"><Badge>{process.eyebrow}</Badge><h2>{process.title}</h2></div>
          <div className="card-grid">
            {process.items.map((step) => (
              <Card key={step.label} className="detail-card"><CardHeader><span className="icon-box"><Icon name={step.icon} /></span><span className="detail-label">{step.label}</span></CardHeader><CardContent><h3>{step.title}</h3><p>{step.description}</p></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing section-border muted-section" id="pricing">
        <div className="container">
          <div className="section-heading compact-heading"><Badge>{pricing.eyebrow}</Badge><h2>{pricing.title}</h2><p>{pricing.description}</p></div>
          <div className="card-grid">
            {pricing.tiers.map((tier) => (
              <Card key={tier.label} className={`price-card ${tier.highlighted ? 'price-card-featured' : ''}`}>
                <CardHeader>
                  <span className="icon-box"><Icon name={tier.icon} /></span>
                  <span className="detail-label">{tier.label}</span>
                </CardHeader>
                <CardContent>
                  <div className="price-header">
                    <span className="price-amount">{tier.price}</span>
                    {tier.period && <span className="price-period">{tier.period}</span>}
                  </div>
                  <p className="price-description">{tier.description}</p>
                  <ul className="price-features">
                    {tier.features.map((feature) => (
                      <li key={feature}><Icon name="check" size={14} /> {feature}</li>
                    ))}
                  </ul>
                  <ActionLink
                    action={{
                      ...tier.action,
                      variant: tier.action.variant ?? (tier.highlighted ? 'default' : 'outline'),
                    }}
                    className="price-button"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="register section-border" id="demo">
        <div className="container">
          <div className="register-panel">
            <div><Badge>{cta.eyebrow}</Badge><h2>{cta.title}</h2><p>{cta.description}</p></div>
            <ActionLink action={cta.action} showArrow />
          </div>
        </div>
      </section>
    </>
  );
}
