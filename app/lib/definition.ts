import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { PublicClient, Address } from 'viem';
import { Provider } from 'ethers'

export type ThemeContextType = {
  theme: string | null,
  setTheme: (theme: string) => void
}

export type EthereumContextType = {
  client: PublicClient,
  provider: Provider
}

export type BlockData = {
  number: bigint | null,
  time: number,
  txns: number,
  recepient: string | Address,
}

export type TransactionData = {
  hash: string,
  from: string,
  to: string,
  time: number,
  amount: number
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