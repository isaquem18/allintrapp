import { ReactElement } from 'react';
import * as Styles from './styles';

interface props {
  children: ReactElement;
}

export function TabsWrapperScreens({ children }: props) {
  return <Styles.Container>{children}</Styles.Container>;
}
