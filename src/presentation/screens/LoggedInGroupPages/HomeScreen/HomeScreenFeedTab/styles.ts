import styled from 'styled-components/native';
import theme from '@styles/theme';

export const Container = styled.View`
  flex: 1;
`;

export const PostList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingHorizontal: theme.values.paddingHorizontal,
    paddingBottom: theme.values.paddingBottom,
    paddingTop: theme.values.paddingTop,
  },
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
`;
