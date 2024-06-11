import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { PublicClient, Address } from 'viem';

export type ThemeContextType = {
  theme: string | null,
  setTheme: (theme: string) => void
}

export type EthereumContextType = {
  client: PublicClient
}

export type BlockData = {
  number: BigInt | null,
  time: number,
  txns: number,
  recepient: string | Address
}

export type ThemeOptionData = {
  label: string,
  icon: IconDefinition
};

export type NavItemType = {
  label: string,
  subLabel: string | null,
  badge: string | null,
  icon: IconDefinition | null
}

export type NavMenuType = {
  label: string,
  data: NavItemType[]
}