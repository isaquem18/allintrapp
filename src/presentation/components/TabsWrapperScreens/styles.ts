import { Dimensions } from 'react-native';

import theme from '@styles/theme';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  padding-left: ${width > theme.values.maxSmartphoneWidth
    ? theme.values.sidebarWidth
    : 0}px;
`;
