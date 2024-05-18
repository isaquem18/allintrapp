import theme from '@styles/theme';
import styled from 'styled-components/native';

export const ScreenContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const FlatListComponent = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingHorizontal: theme.values.paddingHorizontal,
    paddingTop: theme.values.paddingTop,
    paddingBottom: 20,
  },
  contentInsetAdjustmentBehavior: 'automatic',
  initialNumToRender: 20,
})`
  flex: 1;
`;

export const Loader = styled.ActivityIndicator.attrs({
  color: theme.colors.light,
  size: 'small',
})`
  margin-bottom: 20px;
`;
