import { Layers3, Rocket, Search, Sparkles, Target, TrendingUp, Users, Wrench, Zap } from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import type { IconName } from '../../types/content';

const icons = {
  target: Target,
  layers: Layers3,
  trending: TrendingUp,
  search: Search,
  wrench: Wrench,
  rocket: Rocket,
  sparkles: Sparkles,
  zap: Zap,
  users: Users,
} satisfies Record<IconName, React.ComponentType<LucideProps>>;

export function Icon({ name, ...props }: LucideProps & { name: IconName }) {
  const Component = icons[name];
  return <Component aria-hidden="true" {...props} />;
}
