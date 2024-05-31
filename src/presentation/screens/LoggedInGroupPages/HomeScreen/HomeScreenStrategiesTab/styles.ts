import { StyleSheet as S } from 'react-native';
import styled from 'styled-components/native';

import theme from '@styles/theme';

export const FlatList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingHorizontal: theme.values.paddingHorizontal / 2,
    paddingBottom: theme.values.paddingBottom,
    paddingTop: theme.values.paddingTop,
  },
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const StyleSheet = S.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 16,
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
  footer: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: '#CED0CE',
  },
});
