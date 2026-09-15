import { features } from '../../data/project';
import { Card, CardContent, CardHeader } from '../ui/Card';
import { Container } from '../ui/Container';
import { Icon } from '../ui/Icon';
import { SectionHeading } from '../ui/SectionHeading';

export function FeaturesSection() {
  return (
    <section className="scroll-mt-16 border-b border-zinc-200 bg-zinc-50 py-20 sm:py-24 lg:py-28" id="about">
      <Container>
        <SectionHeading
          eyebrow="Why this project"
          title={<>Show people why<br className="hidden sm:block" /> your idea matters.</>}
          description="Use these cards for the three strongest reasons someone should understand, trust, or try your project."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3 lg:mt-16">
          {features.map(({ icon, title, description }, index) => (
            <Card className="flex min-h-72 flex-col justify-between" key={title}>
              <CardHeader>
                <span className="grid size-11 place-items-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-800 transition group-hover:bg-zinc-950 group-hover:text-white"><Icon name={icon} size={19} /></span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-400">0{index + 1}</span>
              </CardHeader>
              <CardContent className="pt-12">
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-zinc-950">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
