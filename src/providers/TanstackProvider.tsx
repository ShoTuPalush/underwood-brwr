'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools/production';

export default function TanstackProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const querryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={querryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
