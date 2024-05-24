import { ReactNode } from 'react';

import { AuthProvider } from './useAuth';

interface Props {
  children: ReactNode;
}

export function GlobalContextProvider({ children }: Props) {
  return <AuthProvider>{children}</AuthProvider>;
}
