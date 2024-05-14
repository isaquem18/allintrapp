import { ReactNode } from 'react';
import { AuthProvider } from './Auth';

interface Props {
  children: ReactNode;
}

export function GlobalContextProvider({ children }: Props) {
  return <AuthProvider>{children}</AuthProvider>;
}
