'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useMemo } from 'react';

export default function TanstackProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = useMemo(() => new QueryClient(), []);

  return (
    <>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </>
  );
}
