import { PublicClient, Address } from 'viem';

export type ThemeContextType = {
  theme: string | null,
  setTheme: (theme: string) => void
}

export type EthereumContextType = {
  client: PublicClient
}

export type BlockData = {
  number: BigInt,
  time: number,
  txns: number,
  recepient: Address
}