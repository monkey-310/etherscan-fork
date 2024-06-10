'use client';

import React, { createContext } from 'react';
import { createPublicClient, http } from 'viem';
import { EthereumContextType } from './lib/definition';
import { mainnet } from 'viem/chains';

export const EthereumContext = createContext<EthereumContextType | null>(null);

export default function EthereumProvider({ children }: { children: React.ReactNode }) {
  const client = createPublicClient({
    chain: mainnet,
    transport: http()
  });

  return <EthereumContext.Provider value={{ client }} >{children}</EthereumContext.Provider>
}

