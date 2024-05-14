import { ReactNode } from 'react';

export type RequestProps = {
  path: string;
  method?: 'GET' | 'POST';
  data?: any;
};

export type ContextProps = {
  request: (props: RequestProps) => any;
  isLoading: boolean;
  setIsLoading: (props: RequestProps) => any;
  timeoutState: boolean;
  setTimeoutState: (props: any) => any;
};

export type RequestProviderProps = {
  children: ReactNode;
};
