import React from 'react';
import { WagmiProvider, serialize, deserialize } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { wagmiConfig } from './config';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1_000 * 60 * 60 * 24,
    },
  },
});

let persister: any;

if (typeof window !== 'undefined') {
  persister = createSyncStoragePersister({
    serialize,
    storage: localStorage,
    deserialize,
  });
}

export default function WgProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister }}
      >
        {children}
      </PersistQueryClientProvider>
    </WagmiProvider>
  );
}
