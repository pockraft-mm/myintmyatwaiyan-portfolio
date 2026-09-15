import { steps } from '../../data/project';
import { Card, CardContent, CardHeader } from '../ui/Card';
import { Container } from '../ui/Container';
import { Icon } from '../ui/Icon';
import { SectionHeading } from '../ui/SectionHeading';

export function ProcessSection() {
  return (
    <section className="scroll-mt-16 border-b border-zinc-200 bg-white py-20 sm:py-24 lg:py-28" id="how-it-works">
      <Container>
        <SectionHeading eyebrow="How it works" title="Make the journey feel obvious." compact />
        <div className="relative mt-12 grid gap-4 md:grid-cols-3 lg:mt-16">
          <div className="absolute left-[16.66%] right-[16.66%] top-8 hidden border-t border-dashed border-zinc-300 md:block" />
          {steps.map(({ icon, label, value, note }) => (
            <Card className="relative flex min-h-64 flex-col justify-between" key={label}>
              <CardHeader>
                <span className="grid size-11 place-items-center rounded-xl bg-zinc-950 text-white shadow-sm"><Icon name={icon} size={19} /></span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-400">{label}</span>
              </CardHeader>
              <CardContent className="pt-10">
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-zinc-950">{value}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{note}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
