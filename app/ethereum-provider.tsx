'use client';

import React, { createContext } from 'react';
import { createPublicClient, http } from 'viem';
import { EthereumContextType } from './lib/definition';
import { mainnet } from 'viem/chains';
import { ethers } from 'ethers';

export const EthereumContext = createContext<EthereumContextType | null>(null);

export default function EthereumProvider({ children }: { children: React.ReactNode }) {

  const client = createPublicClient({
    chain: mainnet,
    transport: http()
  });

  const rpcProvider = new ethers.JsonRpcProvider(`https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_API_KEY}`)

  return <EthereumContext.Provider value={{ client, provider: rpcProvider }} >{children}</EthereumContext.Provider>
}

