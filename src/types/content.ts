export type IconName =
  | 'target'
  | 'layers'
  | 'trending'
  | 'search'
  | 'wrench'
  | 'rocket'
  | 'sparkles'
  | 'zap'
  | 'users';

export interface Feature {
  icon: IconName;
  title: string;
  description: string;
}

export interface ProcessStep {
  icon: IconName;
  label: string;
  value: string;
  note: string;
}

export interface PricingTier {
  icon: IconName;
  label: string;
  price: string;
  period: string;
  description: string;
  features: readonly string[];
}
