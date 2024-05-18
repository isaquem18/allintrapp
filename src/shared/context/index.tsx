import { ReactNode } from 'react';
import { AuthProvider } from './useAuth';
import { BTCUSDTPricesProvider } from './useBTCUSDTPrice';

interface Props {
  children: ReactNode;
}

export function GlobalContextProvider({ children }: Props) {
  return (
    <AuthProvider>
      <BTCUSDTPricesProvider>{children}</BTCUSDTPricesProvider>
    </AuthProvider>
  );
}
