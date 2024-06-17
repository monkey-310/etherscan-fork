import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type ThemeContextType = {
  theme: string | null;
  setTheme: (theme: string) => void;
};

export type BlockData = {
  number: bigint | null;
  time: number;
  txns: number;
};

export type TransactionData = {
  hash: string;
  from: string;
  to: string;
  time: number;
  amount: number;
};

export type ThemeOptionData = {
  label: string;
  icon: IconDefinition;
};

export type NavItemType = {
  label: string;
  subLabel: string | null;
  badge: string | null;
  icon: IconDefinition | null;
};

export type NavMenuType = {
  label: string;
  data: NavItemType[];
};
