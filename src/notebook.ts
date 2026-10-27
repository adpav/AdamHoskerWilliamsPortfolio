export const entryTypes = {
  essay: 'Essay',
  note: 'Note',
  collection: 'Collection',
  experiment: 'Experiment',
  process: 'Process',
} as const;

export const topics = [
  'Design systems',
  'AI',
  'Code',
  'Web',
  'Motion',
  'Branding',
  'Healthcare',
  'Inspiration',
  'Objects',
  'Books',
  'Making',
  'Personal',
] as const;

export type EntryType = keyof typeof entryTypes;
