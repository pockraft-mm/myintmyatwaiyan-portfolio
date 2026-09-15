import type { Feature, PricingTier, ProcessStep } from '../types/content';

export const project = {
  name: 'Pockraft',
  category: 'Your product category',
  title: 'A clear promise that makes your project easy to understand.',
  description: 'Use one or two sentences to explain who this project is for, what problem it solves, and why the solution is worth trying.',
  primaryAction: 'Try the demo',
  primaryUrl: '/demo',
  secondaryAction: 'See how it works',
} as const;

export const features = [
  { icon: 'target', title: 'Feature 1 ', description: 'Explain the real user problem your project addresses and why current options fall short.' },
  { icon: 'layers', title: 'Feature 2', description: 'Show how the project turns a complicated task into a clear, approachable experience.' },
  { icon: 'trending', title: 'Feature 3', description: 'Describe the meaningful result users get—not only the features they receive.' },
] as const satisfies readonly Feature[];

export const steps = [
  { icon: 'search', label: 'Step 01', value: 'Understand', note: 'Start with the user, their context, and the job they need to complete.' },
  { icon: 'wrench', label: 'Step 02', value: 'Create', note: 'Turn the strongest insight into a focused product people can actually use.' },
  { icon: 'rocket', label: 'Step 03', value: 'Improve', note: 'Learn from real feedback and make each version more valuable than the last.' },
] as const satisfies readonly ProcessStep[];

export const pricingTiers = [
  {
    icon: 'sparkles',
    label: 'Basic',
    price: '$9',
    period: '/month',
    description: 'Perfect for individuals and small projects',
    features: ['Up to 1000 API calls', 'Basic analytics', 'Email support', 'Community access', 'Limited integrations'],
  },
  {
    icon: 'zap',
    label: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For growing teams and serious projects',
    features: ['Up to 10,000 API calls', 'Advanced analytics', 'Priority email support', 'All integrations', 'Custom workflows', 'Team collaboration'],
  },
  {
    icon: 'users',
    label: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations with specific needs',
    features: ['Unlimited API calls', 'Dedicated support', 'Custom integrations', 'SLA guarantees', 'On-premise deployment', 'Custom training', 'White-label options'],
  },
] as const satisfies readonly PricingTier[];

export const site = {
  repositoryUrl: 'https://github.com/MoriartyLink/landing-page-template-pockraft',
  readmeUrl: 'https://github.com/MoriartyLink/landing-page-template-pockraft#readme',
  creditsUrl: 'https://github.com/MoriartyLink/landing-page-template-pockraft/blob/main/CREDITS.md',
  referenceCreator: 'Min Thu Khaing',
  referenceCreatorGitHub: 'https://github.com/MoriartyLink',
  upstreamFoundation: 'AppStack-GVN/BuildersQuickTurnStack',
  upstreamUrl: 'https://github.com/AppStack-GVN/BuildersQuickTurnStack',
} as const;
