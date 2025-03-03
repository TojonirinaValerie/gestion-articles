"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface Props {
  children: React.ReactNode;
}

const clientQuery = new QueryClient();

const AppQueryClientProvider: React.FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={clientQuery}>{children}</QueryClientProvider>
  );
};

export default AppQueryClientProvider;
